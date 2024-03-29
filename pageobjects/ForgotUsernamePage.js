export class ForgotUsernamePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.ForgotUserName = page.locator('#forgotUsername');
    this.IndForgotUserNameText = page.locator('.h2-large');
    this.IndForgotUserNameConfirmText = page.locator(
      'p.ta-whitney-book.p.ta-grey500Txt',
    );
    this.FpForgotUserNameText = page.locator('h1');
    this.IndIconImage = page.locator('#Individual');
    this.FpIconImage = page.locator('#Financial Professional');
    this.EmpIconImage = page.locator('#Employer');
    this.ThirdPartyIconImage = page.locator('#Third Party Administrator');
    this.IndIcon = page.locator("//span[contains(text(),'Individual')]");
    this.FpIcon = page.locator(
      "//span[contains(text(),'Financial Professional')]",
    );
    this.EmpIcon = page.locator("//span[contains(text(),'Employer')]");
    this.ThirdPartyIcon = page.locator(
      "//span[contains(text(),'Third Party Administrator')]",
    );
    this.IndLastName = page.locator('#lastName');
    this.IndDob = page.locator('#dob');
    this.IndSSN = page.locator('#ssn');
    this.IndCancelBtn = page.locator('#cancelBtn');
    this.EmailMyUsername = page.locator('#submitBtn');
    this.FpLastName = page.locator("label[for='lastName']");
    this.FpEmail = page.locator("label[for='emailAddress']");
    this.FpCancelBtn = page.locator('#cancelButton');
  }
}
