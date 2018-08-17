module.exports = function (config) {
  config.set({
    files: ['*', 'src/**/*'],
    mutate: [
      'src/app/**/*.ts',
      '!src/**/*.spec.ts',
      '!src/test.ts',
      '!src/environments/*.ts'
    ],
    testRunner: 'karma',
    mutator: 'typescript',
    port: 9336,
    karma: {
      configFile: 'src/karma.conf.js',
      project: 'angular-cli',
      config: {
        browsers: ['ChromeHeadless']
      }
    },
    reporter: ['progress', 'html'],
    coverageAnalysis: 'off',
    maxConcurrentTestRunners: 1,
    fileLogLevel: 'trace'
  });
};
