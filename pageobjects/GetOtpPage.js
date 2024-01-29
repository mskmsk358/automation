export class GetOtpPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.EmailText = page.locator('input#i0116');
    this.SIDButton = page.locator('input#idSIButton9');
  }
  async getOtpCode() {
    await this.page.goto('https://portal.office.com', { timeout: 80 * 10000 });
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
    await newPage.locator("[aria-label*='Your Transamerica']").nth(0).click();
    this.otpText = await newPage
      .locator('#ReadingPaneContainerId font')
      .nth(0)
      .textContent();
    console.log(this.otpText);
    await newPage.close();
    await this.page.close();
  }
}
