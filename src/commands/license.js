
import opn from 'opn';

export default () => {
  opn('https://crocodilejs.com', { wait: false });
  exit(0);
};
