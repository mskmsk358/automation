import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';
import { GetOtpPage } from '../pageobjects/GetOtpPage';
import { saveScreenshot } from '../utils/saveScreenshot';
import config from '../testData/testData.config';

test('Secure2 Login with Special characters username', async ({
  page,
  baseURL,
}) => {
  const loginpage = new LoginPage(page);
  await page.goto(baseURL);
  await saveScreenshot(page, 'screenshot');
  await loginpage.login(config.use.specialCharUsername, config.use.password);
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  const getotppage = new GetOtpPage(page1, context1);
  await getotppage.getOtpCode();
  await page.bringToFront();
  await page.locator('input#securityCode').click();
  await page.locator('input#securityCode').fill(getotppage.otpText);
  await Promise.all([page.locator('#submitBtn').click()]);

  await expect(page).toHaveTitle('Transamerica Participant Experience');
  expect(page.url()).toBe('https://participant.transamerica.com/dashboard');
});
