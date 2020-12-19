module.exports = {
  mutate: [
    '**/*.js',
    '!**/*.spec.js',
    '!node_modules/**',
    '!**/routes.js',
    '!**/index.js',
    '!**/config.js',
    '!**/*.config.js',
    '!**/schema.js',
  ],
  tempDirName: "build/.stryker-tmp",
  packageManager: "yarn",
  reporters: ["html"],
  htmlReporter: { baseDir: 'build/reports/unit/mutation' },
  testRunner: "jest",
  coverageAnalysis: "perTest",
};
