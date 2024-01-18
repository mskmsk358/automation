const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { GetOtpPage } = require('../PageObjects/GetOtpPage');
const { ForgotPasswordPage } = require('../PageObjects/ForgotPasswordPage');
const { ForgotUsernamePage } = require('../PageObjects/ForgotUsernamePage');

test('Secure2 Forgot Password Page Validation', async ({ browser, baseURL }) => {
    const reportcontext = await browser.newContext();
    const page = await reportcontext.newPage();
    const forgotusernamepage = new ForgotUsernamePage(page);
    const forgotpasswordpage = new ForgotPasswordPage(page);
    const loginpage = new LoginPage(page);
    await page.goto(baseURL);
    await expect(forgotpasswordpage.ForgotPassword).toBeVisible();
    await forgotpasswordpage.ForgotPassword.click();
    await expect(forgotusernamepage.IndIconImage).toBeVisible();
    await expect(forgotusernamepage.EmpIconImage).toBeVisible();
    //await expect(forgotusernamepage.FpIconImage).toBeVisible();
    //await expect(forgotusernamepage.ThirdPartyIconImage).toBeVisible();
    const IndText = await (forgotusernamepage.IndIcon).nth(0).textContent();
    expect(IndText).toContain("Individual");

    const FpText = await (forgotusernamepage.FpIcon).nth(0).textContent();
    expect(FpText).toContain("Financial Professional");

    const EmpText = await (forgotusernamepage.EmpIcon).nth(0).textContent();
    expect(EmpText).toContain("Employer");

    const ThirdPartyText = await (forgotusernamepage.ThirdPartyIcon).nth(0).textContent();
    expect(ThirdPartyText).toContain("Third Party Administrator");

    await (forgotusernamepage.IndIcon).nth(0).click();
    await expect(forgotusernamepage.IndLastName).toBeVisible();
    await expect(forgotusernamepage.IndDob).toBeVisible();
    await expect(forgotusernamepage.IndSSN).toBeVisible();
    const forgotPasswordText = await (forgotpasswordpage.ForgotPasswordText).textContent();
    expect(forgotPasswordText).toContain("Forgot password");

    const forgotpasswordConfirmText = await (forgotusernamepage.IndForgotUserNameConfirmText).textContent();
    expect(forgotpasswordConfirmText).toContain(" Please provide the information below to recover your password ");

    /*await forgotusernamepage.IndLastName.click();
    await page.keyboard.press('Tab');
    const LastNameError = await page.locator("#usernamErr p").textContent();
    expect(LastNameError).toContain("This field is required.");

    await forgotusernamepage.IndDob.click();
    await page.keyboard.press('Tab');
    const DobError = await page.locator("#usernamErr p").textContent();
    expect(DobError).toContain("This field is required.");

   await forgotusernamepage.IndDob.type("10/10/100")
    await page.keyboard.press('Tab');
    const DobError1 = await page.locator("#dobPatternErr p").textContent();
    expect(DobError1).toContain(" Please enter a date of birth in the requested format.");

    await forgotusernamepage.IndSSN.click();
    await page.keyboard.press('Tab');
    const SSNError = await page.locator("#usernamErr p").textContent();
    expect(SSNError).toContain("This field is required.");

    await forgotusernamepage.IndSSN.type("123");
    await page.keyboard.press('Tab');
    const SSNError1 = await page.locator("#ssnLenErr p").textContent();
    expect(SSNError1).toContain(" Please enter the last four digits of SSN.");*/

   /* await forgotusernamepage.IndCancelBtn.click();
    await expect(forgotusernamepage.IndCancelBtn).toBeHidden();
    await expect(forgotpasswordpage.ForgotPassword).toBeVisible();
    await forgotpasswordpage.ForgotPassword.click();

    await (forgotusernamepage.FpIcon).nth(0).click();
    await expect(forgotusernamepage.FpLastName).toBeVisible();
    await expect(forgotusernamepage.FpEmail).toBeVisible();
    await expect(forgotusernamepage.EmailMyUsername).toBeVisible();
    const FpforgotusernameText = await (forgotusernamepage.FpForgotUserNameText).textContent();
    expect(FpforgotusernameText).toContain("Forgot Your Password");
    await forgotusernamepage.FpCancelBtn.click();

    await expect(forgotusernamepage.FpCancelBtn).toBeHidden();
    await expect(forgotpasswordpage.ForgotPassword).toBeVisible();

    await forgotpasswordpage.ForgotPassword.click();
    await (forgotusernamepage.EmpIcon).nth(0).click();
    await expect(forgotusernamepage.FpLastName).toBeVisible();
    await expect(forgotusernamepage.FpEmail).toBeVisible();
    await expect(forgotusernamepage.EmailMyUsername).toBeVisible();
    const EmpforgotusernameText = await (forgotusernamepage.FpForgotUserNameText).textContent();
    expect(EmpforgotusernameText).toContain("Forgot Your Password");
    await forgotusernamepage.FpCancelBtn.click();

    await expect(forgotusernamepage.FpCancelBtn).toBeHidden();
    await expect(forgotpasswordpage.ForgotPassword).toBeVisible();
    await forgotpasswordpage.ForgotPassword.click();
    await (forgotusernamepage.ThirdPartyIcon).nth(0).click();
    await expect(forgotusernamepage.FpLastName).toBeVisible();
    await expect(forgotusernamepage.FpEmail).toBeVisible();
    await expect(forgotusernamepage.EmailMyUsername).toBeVisible();
    const TPAforgotusernameText = await (forgotusernamepage.FpForgotUserNameText).textContent();
    expect(TPAforgotusernameText).toContain("Forgot Your Password");
    await forgotusernamepage.FpCancelBtn.click();

    await expect(forgotusernamepage.FpCancelBtn).toBeHidden();
    await expect(forgotpasswordpage.ForgotPassword).toBeVisible();
    await forgotpasswordpage.ForgotPassword.click();
    await (forgotusernamepage.IndIcon).nth(0).click();*/
    await (forgotusernamepage.IndLastName).press('Tab');
    await (forgotusernamepage.IndLastName).type("cooper");
    await (forgotusernamepage.IndDob).type("02/01/1961");
    await (forgotusernamepage.IndSSN).type("2950");
    await (forgotusernamepage.EmailMyUsername).click();
    await loginpage.radioButton.click();
    await loginpage.submitButton.click();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const getotppage = new GetOtpPage(page1,context1);
    await getotppage.getOtpCode();
    await page.bringToFront();
    await page.locator("input#securityCode").click();
    await page.locator("input#securityCode").fill(getotppage.otpText);
    await loginpage.submitButton.click();
    await page.locator("#newPassword").press('Tab');
    const passworderror = await page.locator("#emptyPwdErr>p").textContent();
    expect(passworderror).toContain("Please enter a password.");

    await page.locator("#reTypeNewPassword").press('Tab');
    const repassworderror = await page.locator("mat-error#pwdReEnterInvalidErr>p").textContent();
    expect(repassworderror).toContain("Please re-enter your password.");

    await page.locator("#newPassword").type("Temp$001");
    await page.locator("#reTypeNewPassword").type("Temp$001");
    await loginpage.submitButton.click();

    const usedpassworderror = await page.locator("#notificationMessage").textContent();
    expect(usedpassworderror).toContain("Passwords used within the past 12 months cannot be used. Please create a new password.");
    await page.locator("#newPassword").click();
    await page.keyboard.press('Backspace');
    await page.locator("#newPassword").type("2");
   
    await page.locator("#reTypeNewPassword").click();
    await page.keyboard.press('Backspace');
    await page.locator("#reTypeNewPassword").type("2");
    await loginpage.submitButton.click();
    await expect(page).toHaveURL('https://secure2-tst.transamerica.com/login');
    await browser.close();
});