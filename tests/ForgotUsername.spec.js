import { expect, test } from '@playwright/test';
import { ForgotUsernamePage } from '../pageobjects/ForgotUsernamePage';

test('Secure2 Forgot Username Page Validation', async ({
  browser,
  baseURL,
}) => {
  const reportcontext = await browser.newContext();
  const page = await reportcontext.newPage();
  const forgotusernamepage = new ForgotUsernamePage(page);
  await page.goto(baseURL);
  await expect(forgotusernamepage.ForgotUserName).toBeVisible();
  await forgotusernamepage.ForgotUserName.click();

  await expect(forgotusernamepage.IndIconImage).toBeVisible();
  await expect(forgotusernamepage.EmpIconImage).toBeVisible();
  //await expect(forgotusernamepage.FpIconImage).toBeVisible();
  //await expect(forgotusernamepage.ThirdPartyIconImage).toBeVisible();

  const IndText = await forgotusernamepage.IndIcon.nth(0).textContent();
  expect(IndText).toContain('Individual');

  const FpText = await forgotusernamepage.FpIcon.nth(0).textContent();
  expect(FpText).toContain('Financial Professional');

  const EmpText = await forgotusernamepage.EmpIcon.nth(0).textContent();
  expect(EmpText).toContain('Employer');

  const ThirdPartyText =
    await forgotusernamepage.ThirdPartyIcon.nth(0).textContent();
  expect(ThirdPartyText).toContain('Third Party Administrator');

  await forgotusernamepage.IndIcon.nth(0).click();
  await expect(forgotusernamepage.IndLastName).toBeVisible();
  await expect(forgotusernamepage.IndDob).toBeVisible();
  await expect(forgotusernamepage.IndSSN).toBeVisible();
  const forgotusernameText =
    await forgotusernamepage.IndForgotUserNameText.textContent();
  expect(forgotusernameText).toContain('Forgot username');

  const forgotusernameConfirmText =
    await forgotusernamepage.IndForgotUserNameConfirmText.textContent();
  expect(forgotusernameConfirmText).toContain(
    ' Please provide the information below to recover your username. ',
  );

  await forgotusernamepage.IndLastName.click();
  await page.keyboard.press('Tab');
  const LastNameError = await page.locator('#usernamErr p').textContent();
  expect(LastNameError).toContain('This field is required.');

  await forgotusernamepage.IndDob.click();
  await page.keyboard.press('Tab');
  const DobError = await page.locator('#usernamErr p').textContent();
  expect(DobError).toContain('This field is required.');

  await forgotusernamepage.IndDob.type('10/10/100');
  await page.keyboard.press('Tab');
  const DobError1 = await page.locator('#dobPatternErr p').textContent();
  expect(DobError1).toContain(
    ' Please enter a date of birth in the requested format.',
  );

  // ((forgotusernamepage.IndDob), {clickCount: 8});
  // await page.keyboard.press('Backspace');
  await forgotusernamepage.IndDob.click();
  await this.page.keyboard.press('Ctrl+A');
  await this.page.keyboard.press('Backspace');
  await forgotusernamepage.IndDob.type('10/10/1000');
  await page.keyboard.press('Tab');
  const DobError2 = await page.locator('#dobMaxAgeErr p').textContent();
  expect(DobError2).toContain(
    ' Please re-enter date of birth, you cannot be over 110 years old.',
  );

  /* await page.keyboard.press('Backspace');
    await forgotusernamepage.IndDob.type("10/10/2020")
    await page.keyboard.press('Tab');
    const DobError3 = await page.locator("#dobMinAgeErr p").textContent();
    expect(DobError3).toContain(" Please re-enter date of birth, you must be at least 13 years old.");
    
    await page.keyboard.press('Backspace');
    await forgotusernamepage.IndDob.type("10/10/2025")
    await page.keyboard.press('Tab');
    const DobError4 = await page.locator("#dobFutureDtErr p").textContent();
    expect(DobError4).toContain(" Date of birth cannot be a future date, please re-enter a valid date.");*/

  await forgotusernamepage.IndSSN.click();
  await page.keyboard.press('Tab');
  const SSNError = await page.locator('#usernamErr p').textContent();
  expect(SSNError).toContain('This field is required.');

  await forgotusernamepage.IndSSN.type('123');
  await page.keyboard.press('Tab');
  const SSNError1 = await page.locator('#ssnLenErr p').textContent();
  expect(SSNError1).toContain(' Please enter the last four digits of SSN.');

  await forgotusernamepage.IndCancelBtn.click();
  await expect(forgotusernamepage.IndCancelBtn).toBeHidden();
  await expect(forgotusernamepage.ForgotUserName).toBeVisible();

  await forgotusernamepage.ForgotUserName.click();
  await forgotusernamepage.FpIcon.nth(0).click();
  await expect(forgotusernamepage.FpLastName).toBeVisible();
  await expect(forgotusernamepage.FpEmail).toBeVisible();
  await expect(forgotusernamepage.EmailMyUsername).toBeVisible();
  const FpforgotusernameText =
    await forgotusernamepage.FpForgotUserNameText.textContent();
  expect(FpforgotusernameText).toContain('Forgot Your Username');
  await forgotusernamepage.FpCancelBtn.click();

  await expect(forgotusernamepage.FpCancelBtn).toBeHidden();
  await expect(forgotusernamepage.ForgotUserName).toBeVisible();

  await forgotusernamepage.ForgotUserName.click();
  await forgotusernamepage.EmpIcon.nth(0).click();
  await expect(forgotusernamepage.FpLastName).toBeVisible();
  await expect(forgotusernamepage.FpEmail).toBeVisible();
  await expect(forgotusernamepage.EmailMyUsername).toBeVisible();
  const EmpforgotusernameText =
    await forgotusernamepage.FpForgotUserNameText.textContent();
  expect(EmpforgotusernameText).toContain('Forgot Your Username');
  await forgotusernamepage.FpCancelBtn.click();

  await expect(forgotusernamepage.FpCancelBtn).toBeHidden();
  await expect(forgotusernamepage.ForgotUserName).toBeVisible();
  await forgotusernamepage.ForgotUserName.click();
  await forgotusernamepage.ThirdPartyIcon.nth(0).click();
  await expect(forgotusernamepage.FpLastName).toBeVisible();
  await expect(forgotusernamepage.FpEmail).toBeVisible();
  await expect(forgotusernamepage.EmailMyUsername).toBeVisible();
  const TPAforgotusernameText =
    await forgotusernamepage.FpForgotUserNameText.textContent();
  expect(TPAforgotusernameText).toContain('Forgot Your Username');
  await forgotusernamepage.FpCancelBtn.click();

  await expect(forgotusernamepage.FpCancelBtn).toBeHidden();
  await expect(forgotusernamepage.ForgotUserName).toBeVisible();
  await forgotusernamepage.IndIcon.nth(0).click();
  await forgotusernamepage.IndLastName.type('cooper');
  await forgotusernamepage.IndDob.type('02/01/1961');
  await forgotusernamepage.IndSSN.type('2950');
  await forgotusernamepage.EmailMyUsername.click();
  const sucessMessage = await page
    .locator('##notificationMessage')
    .textContent();
  expect(sucessMessage).toContain(
    'An email with your username has been sent to',
  );
});
