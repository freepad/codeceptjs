exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://rwa-194.87.102.103.sslip.io',
      show: true,
    },
  },
  include: {
    I: './steps_file',
    loginPage: './pages/LoginPage.ts',
    authPage: './pages/AuthPage.ts',
    editorPage: './pages/EditorPage.ts',
    articlePage: './pages/ArticlePage.ts',
    config: './config.ts',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/auth_steps.ts'],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    retryTo: {
      enabled: true,
    },
    eachElement: {
      enabled: true,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0,
    },
    {
      pattern: 'amOnPage',
      timeout: 0,
    },
  ],
  tests: 'tests/**/*_test.ts',
  name: 'codeceptjs',
}
