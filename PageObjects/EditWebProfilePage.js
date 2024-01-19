export class EditWebProfilePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userAvatar = page.locator('#userAvatar');
    this.myProfileButton = page.locator('li.account');
    this.SecurityQuestion = page.locator("[for='answer']");
    this.SecurityAnswer = page.locator('#answerMasked');
    this.ContinueButton = page.locator('#btnContinue');
    this.UserNameLabel = page.locator("//h4[text()='Username']");
    this.PasswordLabel = page.locator("//h4[text()='Password']");
    this.PrimaryEmailLabel = page.locator("//h4[text()='Primary Email']");
    this.UserNameChangeButton = page.locator('.sso-username');
    this.PasswordChangeButton = page.locator('.sso-password');
    this.PrimaryEmailChangeButton = page.locator('.sso-primary');
    this.SecurityQuestion1 = page.locator(
      "select[name='questions[0].questionId']",
    );
    this.SecurityQuestion2 = page.locator(
      "select[name='questions[1].questionId']",
    );
    this.SecurityQuestion3 = page.locator(
      "select[name='questions[2].questionId']",
    );
    this.SecurityAnswer1 = page.locator('#answer0');
    this.SecurityAnswer2 = page.locator('#answer1');
    this.SecurityAnswer3 = page.locator('#answer2');
    this.SaveButton = page.locator('#btnSave');
    this.CancelButton = page.locator("//a[contains(text(),'Cancel')]");
  }

  async selectSecurityQuestion() {
    this.securityAnswer = await this.SecurityQuestion.textContent();
    console.log(this.securityAnswer);
    this.sSplitMsg = this.securityAnswer.split(' ');
    this.sAnswer = this.sSplitMsg[this.sSplitMsg.length - 1];
    this.sAnswer = this.sAnswer.replace('?', '');
    console.log(this.sAnswer);
    await this.SecurityAnswer.fill(this.sAnswer);
  }
}
