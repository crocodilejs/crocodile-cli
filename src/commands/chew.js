
import childProcess from 'child-process-promise';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import opn from 'opn';

const tic = chalk.green('✓');
const tac = chalk.red('✗');
const opts = { stdio: 'ignore' };

export default async (dir) => {

  if (!which('git')) {
    console.log(chalk.red('You are missing `git` on your system, please install it'));
    exit(1);
  }

  const spinner = ora(`Installing CrocodileJS to "${dir}"...`).start();

  // check if the dir already exists, if it does then fail
  try {
    const exists = fs.statSync(dir);
    if (exists.isDirectory()) {
      spinner.stop();
      console.log(`${tac} Directory "${dir}" already exists, please enter a new directory name and try again`);
      exit(1);
    }
  } catch (err) {
    spinner.text = `${tic} Directory "${dir}" does not exist and is OK to create`;
  }

  try {

    spinner.text = 'Cloning repository from GitHub';

    await childProcess.exec(`git clone --depth=1 --branch=master https://github.com/crocodilejs/crocodile-node-mvc-framework.git ${dir}`, opts);

    // change directory to the newly clone repo
    spinner.text = 'Changing directory to newly cloned repository';
    cd(dir);

    // only pull the latest release
    // <http://goo.gl/52I5HA>
    spinner.text = 'Pulling latest GitHub release';
    await childProcess.exec('git fetch --tags', opts);

    // determine latest tag
    spinner.text = 'Determining latest tag';
    let tag = await childProcess.exec(
      'git describe --tags `git rev-list --tags --max-count=1`',
      { encoding: 'utf8' }
    );

    // trim trailing line breaks
    tag = tag.stdout.trim();

    // checkout latest tag
    spinner.text = `Downloading CrocodileJS version ${tag}`;
    await childProcess.exec(`git checkout ${tag}`, opts);

    // remove the git commmit history
    spinner.text = 'Removing git commit history';
    rm('-rf', '.git');

    // remove the media folder
    spinner.text = 'Removing media folder';
    rm('-rf', 'media');

    // copy over the environment file for us to complete
    spinner.text = 'Copying environment file';
    cp('.env.example', '.env');

    // initialize git state on the repository clone
    spinner.text = 'Initializing new git state of repository';
    await childProcess.exec('git init', opts);

    // stop the spinner
    spinner.stop();

    // tell user it was successful
    console.log(`${tic} You have successfully created a new CrocodileJS project in "${dir}"\n`);

    // mention twitter link
    console.log(`Tweet it: ${chalk.underline.cyan('https://goo.gl/I0d780')}\n`);

    exit(0);

  } catch (err) {

    // cleanup
    rm('-rf', dir);

    // stop the spinner
    spinner.stop();

    // output error and open github issues
    console.log(`${tac} An error occured while cloning the repository from GitHub, please try again or file an issue with the below output:\n`);
    console.log(err && err.stack);
    opn('https://github.com/crocodilejs/crocodile-node-mvc-framework/issues/new', { wait: false });

    exit(1);

  }

};
