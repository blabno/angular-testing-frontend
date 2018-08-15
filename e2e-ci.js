const ng = require('@angular/cli');

const getIp = require('./getIp');

ng.default({ cliArgs: ['e2e', '-c', 'ci', '--host', `${getIp() || 'localhost'}`] })
  .then(exitCode => process.exit(exitCode))
  .catch(e => {
    console.error(e);
    process.exit(127);
  });
