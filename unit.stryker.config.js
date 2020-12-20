module.exports = {
  mutate: [
    'src/**/*.js',
    'src/*.js',
    '!src/**/*.spec.js',
    '!node_modules/**',
    '!src/**/routes.js',
    '!src/**/index.js',
    '!src/**/schema.js',
  ],
  tempDirName: 'build/.stryker-tmp',
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  htmlReporter: { baseDir: 'build/reports/unit/mutation' },
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
};
