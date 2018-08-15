// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const getIp = require('../getIp');

const address = process.env.SELENIUM_HOST && getIp() || 'localhost';

const directConnect = !process.env.SELENIUM_HOST;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/index.e2e-spec.ts',
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect,
  seleniumAddress: `http://${process.env.SELENIUM_HOST || 'localhost'}:4444/wd/hub`,
  baseUrl: `http://${address}:4200/`,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
