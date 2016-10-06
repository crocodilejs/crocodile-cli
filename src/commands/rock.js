
import chalk from 'chalk';
import opn from 'opn';

export default () => {
  console.log(chalk.yellow('La lalalala la lalalala la lalalala la'));
  opn('https://goo.gl/qGVARW', { wait: false });
  exit(0);
};
