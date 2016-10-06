
import 'shelljs/global';
import program from 'commander';
import importDir from 'import-dir';
import chalk from 'chalk';
import updateNotifier from 'update-notifier';

import pkg from '../package.json';
import CROCODILE from '../.crocodile';

const commands = importDir('./commands');

console.log(chalk.green(CROCODILE));
console.log(`\uD83D\uDC0A  ${chalk.bold('CrocodileJS')} is a ${chalk.underline('Node MVC framework')} that lets you ${chalk.underline('chew apart')} JavaScript - ${chalk.underline.cyan('https://crocodilejs.com')}\n`);

program.version(pkg.version);

program
  .command('chew <dir> [version]')
  .description('Create a new CrocodileJS project')
  .action(commands.chew);

program
  .command('upgrade')
  .description('Upgrade your existing CrocodileJS project')
  .action(commands.upgrade);

program
  .command('issues')
  .description('Open GitHub issues for CrocodileJS')
  .action(commands.issues);

program
  .command('docs')
  .description('Read CrocodileJS documentation on GitHub')
  .action(commands.docs);

program
  .command('license')
  .description('Purchase a commercial CrocodileJS license')
  .action(commands.license);

program
  .command('rock')
  .description('I wonder what this does?')
  .action(commands.rock);

if (process.argv.length <= 2)
  program.outputHelp();
else
	program.parse(process.argv);

updateNotifier({ pkg }).notify();
