
import _ from 'lodash';
import chalk from 'chalk';
import path from 'path';
import YAML from 'yamljs';
import cmp from 'semver-compare';
import opn from 'opn';
import request from 'request-promise-native';

const tic = chalk.green('✓');
const tac = chalk.red('✗');

export default async () => {

  try {

    // look for the `.crocodile.yml` file in the current folder
    const yaml = YAML.load(path.join(process.cwd(), '.crocodile.yml'));

    if (!_.isObject(yaml))
      throw new Error('We could not detect a file named ".crocodile.yml" in your current working directory.  Please ensure your current working directory is a CrocodileJS project.');

    if (!_.isObject(yaml.crocodile))
      throw new Error('You must have a `crocodile` block in the YAML file');

    if (!_.isString(yaml.crocodile.version))
      throw new Error('Version was missing in the `crocodile` block of the YAML file');

    try {

      // compare the current semver version to the latest release from GitHub
      const release = await request({
        uri: 'https://api.github.com/repos/crocodilejs/crocodile-node-mvc-framework/releases/latest',
        json: true,
        headers: { 'User-Agent': 'CrocodileJS' }
      });

      const diff = cmp(release.tag_name, yaml.crocodile.version);

      // if version is the same, we're up to date
      // otherwise link the user to the github release page
      // with documentation and notes about the release
      if (diff === 1) {
        // 1 = needs upgraded
        console.log(`${tac} You are using an old version of CrocodileJS! Latest version is ${release.tag_name} and you are only on ${yaml.crocodile.version}!\n`);
        console.log(`View the official release and upgrade notes at: ${chalk.underline.cyan(release.html_url)}\n`);
        console.log(`${chalk.underline('After you upgrade')} you will need to update the version specified in the file ".crocodile.yml" found in the root of your CrocodileJS project.`);
        opn(release.html_url, { wait: false });
      } else if (diff === 0) {
        // 0 = no upgrade needed
        console.log(`${tic} Your project is already using latest version of CrocodileJS.  Great work!`);
      } else {
        // -1 = you have a version that isn't even out yet!
        const err = new Error('You have a version that has not been released yet!');
        err.type = 'VersionUnreleased';
        throw err;
      }

    } catch (err) {
      if (err.type !== 'VersionUnreleased')
        err.message = `There was an error with GitHub while looking up the latest release version: ${err.message}`;
      throw err;
    }

    exit(0);

  } catch (err) {
    console.log(`${tac} ${err.message}\n`);
    console.log(`Please try again or file an issue on GitHub: ${chalk.underline.cyan('https://github.com/crocodilejs/crocodile-cli/issues/new')}`);
    exit(1);
  }

};
