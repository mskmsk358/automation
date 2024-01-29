import { expect, test } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';
import { EditWebProfilePage } from '../pageobjects/EditWebProfilePage';
import { GetOtpPage } from '../pageobjects/GetOtpPage';
import { saveScreenshot } from '../utils/saveScreenshot';

test('Secure2 Edit WebProfile Page Validation', async ({
  browser,
  baseURL,
}) => {
  const reportcontext = await browser.newContext();
  const page = await reportcontext.newPage();
  const editwebprofilepage = new EditWebProfilePage(page);
  const loginpage = new LoginPage(page);
  const username = 'AutomationAdam';
  const password = 'Temp_001';
  await page.goto(baseURL);
  await saveScreenshot(page, 'screenshot');
  await loginpage.login(username, password);
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  const getotppage = new GetOtpPage(page1, context1);
  await getotppage.getOtpCode();
  await page.bringToFront();
  await page.locator('input#securityCode').click();
  await page.locator('input#securityCode').fill(getotppage.otpText);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('#submitBtn').click(),
  ]);

  await expect(page).toHaveTitle('Transamerica Participant Experience');
  await editwebprofilepage.userAvatar.click();
  await editwebprofilepage.myProfileButton.nth(0).click();
  await editwebprofilepage.selectSecurityQuestion();
  await editwebprofilepage.ContinueButton.click();
  const usernamelabel =
    await editwebprofilepage.UserNameLabel.nth(0).textContent();
  expect(usernamelabel).toContain('Username');

  const passwordlabel = await editwebprofilepage.PasswordLabel.textContent();
  expect(passwordlabel).toContain('Password');

  const primaryemailLabel =
    await editwebprofilepage.PrimaryEmailLabel.textContent();
  expect(primaryemailLabel).toContain('Primary Email');

  await expect(editwebprofilepage.UserNameChangeButton).toBeEnabled();
  await expect(editwebprofilepage.PasswordChangeButton).toBeEnabled();
  await expect(editwebprofilepage.PrimaryEmailChangeButton).toBeEnabled();

  await expect(editwebprofilepage.SecurityQuestion1).toBeVisible();
  await expect(editwebprofilepage.SecurityQuestion2).toBeVisible();
  await expect(editwebprofilepage.SecurityQuestion3).toBeVisible();

  await expect(editwebprofilepage.SecurityAnswer1).toBeDisabled();
  await expect(editwebprofilepage.SecurityAnswer2).toBeDisabled();
  await expect(editwebprofilepage.SecurityAnswer3).toBeDisabled();

  await expect(editwebprofilepage.SaveButton).toBeDisabled();
  await expect(editwebprofilepage.CancelButton).toBeVisible();

  await page.selectOption('#question0', {
    label: 'In what city or town was your first job?',
  });
  await expect(editwebprofilepage.SaveButton).toBeEnabled();

  //expect( await page.locator("//a[contains(text(),'Cancel')]").toBeHidden()).toBeFalsy();
});
