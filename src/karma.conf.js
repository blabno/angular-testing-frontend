// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const getIp = require('../getIp');

module.exports = function (config) {
  config.set({
    hostname: getIp() || 'localhost',
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webdriver-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    customLaunchers: {
      selenium_chrome: {
        base: 'WebDriver',
        config: {
          desiredCapabilities: {
            //capabilities of driver
          },
          host: process.env.SELENIUM_HOST || 'localhost',
          port: 4444,
          path: '/wd/hub'
        },
        name: 'Karma',
        browserName: 'chrome'
      }
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: (process.env.KARMA_BROWSERS || 'Chrome').split(','),
    singleRun: process.env.KARMA_SINGLE_RUN || false
  });
};
