import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import 'dotenv/config';
/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  forbidOnly: !!process.env.CI,
  timeout: 90 * 1000,
  expect: {
    timeout: 10000,
  },
  reporter: [
    ['junit', { outputFile: './test-results/playwright-results.xml' }],
    ['line'],
    ['html', { open: 'never', outputFolder: 'html-report' }],
    ['allure-playwright'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 30000,
    navigationTimeout: 30000,
    colorScheme: 'dark',
    baseURL: 'https://secure2-tst.transamerica.com/',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    ignoreHttpsErrors: true,
    video: 'on',
  },
  projects: [
    /*
  {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
 */
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ignoreHTTPSErrors: true,
      },
    },
    /*
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        ignoreHTTPSErrors: true,
      },
    },*/
  ],
};

module.exports = config;
