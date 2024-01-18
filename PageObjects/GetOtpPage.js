const { expect } = require("../playwright.config");
const { LoginPage } = require('../PageObjects/LoginPage');
class GetOtpPage{

    otpText;
    constructor(page1, context1)  
    {
        
        this.page1 = page1;
        this.context1 = context1;
        this.EmailText= page1.locator("input#i0116");
        this.SIDButton = page1.locator("input#idSIButton9");
    }
    async getOtpCode()
    {   
        await this.page1.goto('https://portal.office.com', { timeout: 80 * 10000 });
        await this.page1.waitForNavigation();
        await this.page1.locator("input#i0116").type("svigtswinqa01@transamerica.com");
        await this.page1.locator("input#idSIButton9").click();
        await this.page1.locator("input#i0118").click();
        await this.page1.locator("input#i0118").type("eKk!2ZV!");
        await this.page1.locator("input#idSIButton9").click();
        await this.page1.locator("input#idSIButton9").click();
        const [newPage] = await Promise.all([
    
             this.context1.waitForEvent('page'),
             await this.page1.locator("[alt='Outlook']").click(),
        ])
        await newPage.locator("[aria-label*='Your Transamerica']").nth(0).click();
         this.otpText = await newPage.locator("#ReadingPaneContainerId font").nth(0).textContent();
        console.log(this.otpText);
        await newPage.close();
        await this.page1.close();
        
    }
}


module.exports = {GetOtpPage};