/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "build/coverage",

  coveragePathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: [
    '**/*.js',
    '!**/build/**',
    '!**/*.config.js',
    '!config.js',
  ],
  coverageProvider: "v8",

   coverageReporters: [
     "json",
     "text",
     "lcov",
   ],

  errorOnDeprecated: true,

  // A set of global variables that need to be available in all test environments
  // globals: {},


   roots: [
     "<rootDir>"
   ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // timers: "real",

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
