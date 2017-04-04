//Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './bower_components/angular/angular.min.js',
      './bower_components/angular-ui-router/release/angular-ui-router.min.js',
      './bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/app.js',
      'app/scripts/controllers/*.js',
      'app/scripts/services/*.js',
      'app/scripts/directives/*.js',
      'app/scripts/core/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
