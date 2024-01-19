export class ForgotPasswordPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.ForgotPassword = page.locator('#forgotPassword');
    this.ForgotPasswordText = page.locator('.h2-large');
  }
}
