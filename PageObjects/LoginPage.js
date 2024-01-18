class LoginPage {

    constructor(page)
{
   
    this.page = page;
    this.Username = page.locator("input#userName");
    this.Password = page.locator("input#password");
    this.LoginButton = page.locator("button#loginBtn");
    this.radioButton =  page.locator('.mat-radio-outer-circle').nth(1);
    this.submitButton = page.locator("#submitBtn");
}



    async goToUrl()
{
    await this.page.goto("https://secure2.transamerica.com/login");
}

    async login(username,password)
    {
        await this.Username.type(username);
        await this.Password.type(password);
        await this.LoginButton.click();
        await this.radioButton.click();
        

    }

    async getOtpCode1111()
    {
        await page1.goto("https://portal.office.com");
        await page1.waitForNavigation();
        await page1.locator("input#i0116").type("svigtswinqa01@transamerica.com");
    }

    async getOtpCode1111()
    {
        this.page1 = page1;
        await page1.goto("https://portal.office.com");
        await page1.waitForNavigation();
        await page1.locator("input#i0116").type("svigtswinqa01@transamerica.com");
        await page1.locator("input#idSIButton9").click();
        await page1.locator("input#i0118").click();
        await page1.locator("input#i0118").type("eKk!2ZV!");
        await page1.locator("input#idSIButton9").click();
        await page1.locator("input#idSIButton9").click();
        const [newPage] = await Promise.all([
        context1.waitForEvent('page'),
         page1.locator("[alt='Outlook']").click(),     
    ])
    await newPage.locator("[title='Inbox']").click();
    await newPage.locator("[aria-label*='Your Transamerica']").first().click();
    const text = await newPage.locator("#ReadingPaneContainerId font").nth(0).textContent();
    await newPage.close();
    await page1.close();
    }
}


module.exports = {LoginPage};