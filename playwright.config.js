// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries:0, 
  workers:1,
 timeout: 90 * 1000,
  expect: {
  timeout: 10000
  },
  reporter: [['line'], ['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL : "https://secure2-tst.transamerica.com/",
    browserName : 'chromium',
    headless : false,
    screenshot : 'only-on-failure',
    trace : 'retain-on-failure',
    //ignoreHttpsErrors:true,
    video:'retain-on-failure',
  contextOptions: {
    recordVideo: {
      dir: './tests' // Or wherever you want the videos to be saved.
    }
  }

}
};

module.exports = config;
