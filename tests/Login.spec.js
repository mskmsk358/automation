const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { GetOtpPage } = require('../PageObjects/GetOtpPage');



// test.describe.configure({mode:'parallel'}) --- to run test cases in parallel
// test('example Login page', async ({ browser }) => {
//     const username = "adam&123";
//     const password = "Temp$0001";
//     const reportcontext = await browser.newContext();
//     const editorcontext = await browser.newContext();
//     const page = await reportcontext.newPage();
//     const page1 = await editorcontext.newPage();
//     const LoginPage = new LoginPage(page);
//     LoginPage.goToUrl();
//     LoginPage.Login(username,password);
//     await page.locator('.mat-radio-outer-circle').nth(0).click();
//     page.pause();

// });


test('Secure2 Login & MyProducts Page Validation', async ({ browser, baseURL }) => {
    const reportcontext = await browser.newContext();
    const page = await reportcontext.newPage();
    const loginpage = new LoginPage(page);
    const username = "TracySample1234";
    const password = "Temp$0001";
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

    const RetirementText = await page.locator("text=Retirement Plans").textContent();
    console.log(RetirementText);
    expect(RetirementText).toContain('Retirement');

     const HSAText = await page.locator("h2.ta-dashboard__heading").nth(1).textContent();
     console.log(HSAText);
     expect(HSAText).toContain('Spending Accounts');
     await page.close();
});