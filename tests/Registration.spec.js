const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { GetOtpPage } = require('../PageObjects/GetOtpPage');
const { RegistrationPage } = require('../PageObjects/RegistrationPage');

//test.describe.configure({mode: 'parallel'});
//test.describe.configure({mode: 'serial'}) 
test('Secure2 Registration 1st & 2nd Page Error Messages Validation', async ({ browser, baseURL }) => {
    const reportcontext = await browser.newContext();
    const page = await reportcontext.newPage();
    const loginpage = new LoginPage(page);
    const registrationpage = new RegistrationPage(page);
    await page.goto(baseURL);
    await page.goto('https://secure2.transamerica.com/registration/participant/your-information');
    await (registrationpage.firstName).press('Tab');
    await expect(registrationpage.firstNameError).toContainText('This field is required.');

    await (registrationpage.lastName).press('Tab');
    await expect(registrationpage.lastNameError).toContainText('This field is required.');

    await (registrationpage.dob).press('Tab');
    await expect(registrationpage.dobError).toContainText('This field is required.');

    await (registrationpage.ssn).press('Tab');
    await expect(registrationpage.ssnError).toContainText('This field is required.');

    await (registrationpage.email).press('Tab');
    await expect(registrationpage.emailError).toContainText('This field is required.');

    await (registrationpage.addressLine1).press('Tab');
    await expect(registrationpage.addressLine1Error).toContainText('This field is required.');

    await (registrationpage.city).press('Tab');
    await expect(registrationpage.cityError).toContainText('This field is required.');

    await (registrationpage.state).press('Tab');
    await expect(registrationpage.stateError).toContainText('This field is required.');

    await (registrationpage.zip).press('Tab');
    await expect(registrationpage.zipError).toContainText('This field is required.');
    await registrationpage.registrtaionFirstPage();

    await (registrationpage.userName).press('Tab');
    await expect(registrationpage.userNameError).toContainText('This field is required.');


    await (registrationpage.password).press('Tab');
    await expect(registrationpage.passwordError).toContainText('This field is required.');


    await (registrationpage.repassword).press('Tab');
    await expect(registrationpage.repasswordError).toContainText(' Please re-enter your password. ');


    await (registrationpage.securityQuestion1).press('Tab');
    await expect(registrationpage.securityQuestion1Error).toContainText(' Please choose a security question. ');


    await (registrationpage.securityQuestion2).press('Tab');
    await expect(registrationpage.securityQuestion2Error).toContainText(' Please choose a security question. ');


    await (registrationpage.securityQuestion3).press('Tab');
    await expect(registrationpage.securityQuestion3Error).toContainText(' Please choose a security question. ');

    await (registrationpage.securityAnswer1).press('Tab');
    await expect(registrationpage.securityAnswer1Error).toContainText(' This field is empty, please enter a security answer. ');

    await (registrationpage.securityAnswer2).press('Tab');
    await expect(registrationpage.securityAnswer2Error).toContainText(' This field is empty, please enter a security answer. ');

    await (registrationpage.securityAnswer3).press('Tab');
    await expect(registrationpage.securityAnswer3Error).toContainText(' This field is empty, please enter a security answer. ');

    await (registrationpage.termsOfUse).click();
    await page.locator('#acceptBtn').click();
    //expect(await page.locator("touCheckBox-input").isChecked()).toBeTruthy();
   // await expect(page.locator('touCheckBox-input')).toBeChecked();
    //expect(await page.isChecked(registrationpage.termsOfUse)).toBeTruthy();

    await (registrationpage.eConsent).click();
    await page.locator('#acceptBtn').click();
    await browser.close();
   // expect(await page.isChecked(registrationpage.eConsent)).toBeTruthy() 
   
    //console.log(await (registrationpage.termsOfUse).isChecked());
   // await (registrationpage.eConsent).press('Tab');
   // expect (registrationpage.termsOfUse).toBeChecked(); 

});




test('Secure2 Registration  Validation', async ({ browser, baseURL }) => {
    const reportcontext = await browser.newContext();
    const page = await reportcontext.newPage();
    const loginpage = new LoginPage(page);
    const registrationpage = new RegistrationPage(page);
    await page.goto(baseURL);
    await page.goto('https://secure2.transamerica.com/registration/participant/your-information');
        
    await registrationpage.registrtaionFirstPage();

    await (registrationpage.userName).type('Tracy@123');

    await (registrationpage.password).type('Temp$001');
    
    await (registrationpage.repassword).type('Temp$001');

    await page.locator('#securityQuesSelect0').click();
    await page.locator("#question-0-1>span").click();
    await page.locator("#securityQuestionAnswerInput0").type('job');
    //await page.selectOption
    //await page.locator("#securityQuesSelect0").selectOption({ label: 'In what city or town was your first job?' });
    //await page.selectOption("#securityQuesSelect0",{label : "In what city or town was your first job?"});
    

    await page.locator('#securityQuesSelect1').click();
    await page.locator("#question-1-5>span").click();
    await page.locator("#securityQuestionAnswerInput1").type('hero');

    await page.locator('#securityQuesSelect2').click();
    await page.locator("#question-2-14>span").click();
    await page.locator("#securityQuestionAnswerInput2").type('hero');
    
    await (registrationpage.termsOfUse).click();
    await page.locator('#acceptBtn').click();
    //expect(await page.locator("touCheckBox-input").isChecked()).toBeTruthy();
   // await expect(page.locator('touCheckBox-input')).toBeChecked();
    //expect(await page.isChecked(registrationpage.termsOfUse)).toBeTruthy();

    await (registrationpage.eConsent).click();
    await page.locator('#acceptBtnn').click();
    //await expect(registrationpage.continue).toBeEnabled();
    await browser.close();
   // expect(await page.isChecked(registrationpage.eConsent)).toBeTruthy() 
   
    //console.log(await (registrationpage.termsOfUse).isChecked());
   // await (registrationpage.eConsent).press('Tab');
   // expect (registrationpage.termsOfUse).toBeChecked(); 


});