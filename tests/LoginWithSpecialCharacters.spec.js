const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { GetOtpPage } = require('../PageObjects/GetOtpPage');

test('Secure2 Login with Special characters username', async ({ browser, baseURL }) => {
    const reportcontext = await browser.newContext();
    const page = await reportcontext.newPage();
    const loginpage = new LoginPage(page);
    const username = "Pp111-11-0611!#.$&?_-+@";
    const password = "Temp$001";
    await page.goto(baseURL);
    await page.screenshot({path: 'screenshot.png'});
    await loginpage.login(username,password);
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const getotppage = new GetOtpPage(page1,context1);
    await getotppage.getOtpCode();
    await page.bringToFront();
    await page.locator("input#securityCode").click();
    await page.locator("input#securityCode").fill(getotppage.otpText);
    await Promise.all([
         page.waitForNavigation(),
         page.locator("#submitBtn").click(),
    ])
    
    await expect(page).toHaveTitle('Transamerica Participant Experience')
    expect(page.url()).toBe("https://participant.transamerica.com/dashboard");
});