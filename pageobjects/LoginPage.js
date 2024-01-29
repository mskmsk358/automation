export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.Username = page.locator('input#userName');
    this.Password = page.locator('input#password');
    this.LoginButton = page.locator('button#loginBtn');
    this.radioButton = page.locator('.mat-radio-outer-circle').nth(1);
    this.submitButton = page.locator('#submitBtn');
  }

  async goToUrl() {
    await this.page.goto('https://secure2.transamerica.com/login');
  }

  async login(username, password) {
    await this.Username.fill(username);
    await this.Password.fill(password);
    await this.LoginButton.click();
    await this.radioButton.click();
  }

  // async getOtpCode1111() {
  //   await this.page.goto('https://portal.office.com');
  //   await this.page.waitForNavigation();
  //   await this.page
  //     .locator('input#i0116')
  //     .fill('svigtswinqa01@transamerica.com');
  // }

  async getOtpCode1111() {
    await this.page.goto('https://portal.office.com');
    await this.page
      .locator('input#i0116')
      .fill('svigtswinqa01@transamerica.com');
    await this.page.locator('input#idSIButton9').click();
    await this.page.locator('input#i0118').click();
    await this.page.locator('input#i0118').fill('eKk!2ZV!');
    await this.page.locator('input#idSIButton9').click();
    await this.page.locator('input#idSIButton9').click();
    const newPagePromise = this.page.waitForEvent('popup');
    await this.page.locator("[alt='Outlook']").click();
    const newPage = await newPagePromise;
    await newPage.locator("[title='Inbox']").click();
    await newPage.locator("[aria-label*='Your Transamerica']").first().click();
    const text = await newPage
      .locator('#ReadingPaneContainerId font')
      .nth(0)
      .textContent();
    await newPage.close();
    await this.page.close();
    return text;
  }
}
