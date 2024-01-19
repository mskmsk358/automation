export class RegistrationPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.dob = page.locator('#dob');
    this.ssn = page.locator('#ssn');
    this.email = page.locator('#emailAddress');
    this.addressLine1 = page.locator('#addressLine1');
    this.city = page.locator('#city');
    this.state = page.locator('#state');
    this.zip = page.locator('#zip');

    this.continue = page.locator('#submitBtn');

    this.firstNameError = page.locator('#firstNameReqErr>p');
    this.lastNameError = page.locator('#lastNameReqErr>p');
    this.dobError = page.locator('#dobReqErr>p');
    this.ssnError = page.locator('#ssnReqErr>p');
    this.emailError = page.locator('#emailReqErr>p');
    this.addressLine1Error = page.locator('#addline1ReqErr>p');
    this.cityError = page.locator('#cityReqErr>p');
    this.stateError = page.locator('#stateReqErr>p');
    this.zipError = page.locator('#zipReqErr>p');

    this.userName = page.locator('#userName');
    this.password = page.locator('#password');
    this.repassword = page.locator('#retypepassword');
    this.securityQuestion1 = page.locator('#securityQuesSelect0');
    this.securityQuestion2 = page.locator('#securityQuesSelect1');
    this.securityQuestion3 = page.locator('#securityQuesSelect2');
    this.securityAnswer1 = page.locator('#securityQuestionAnswerInput0');
    this.securityAnswer2 = page.locator('#securityQuestionAnswerInput1');
    this.securityAnswer3 = page.locator('#securityQuestionAnswerInput2');

    this.userNameError = page.locator('#unReqErr');
    this.passwordError = page.locator('#pwdReqErr');
    this.repasswordError = page.locator('#retypePwdReqErr');
    this.securityQuestion1Error = page.locator('#question0ReqErr');
    this.securityQuestion2Error = page.locator('#question1ReqErr');
    this.securityQuestion3Error = page.locator('#question2ReqErr');
    this.securityAnswer1Error = page.locator('#answer0ReqErr');
    this.securityAnswer2Error = page.locator('#answer1ReqErr');
    this.securityAnswer3Error = page.locator('#answer2ReqErr');

    this.termsOfUse = page.locator('#touCheckBox');
    this.eConsent = page.locator('#consentCheckBox');
  }

  async registrtaionFirstPage() {
    await this.firstName.fill('TRACY');
    await this.lastName.fill('SAMPLE3');
    await this.dob.fill('09/08/1998');
    await this.ssn.fill('343-43-4123');
    await this.email.fill('sateesh.muthineni1@transamerica.com');
    await this.addressLine1.fill('21 48TH AVE');
    await this.city.fill('HARRISON');
    await this.page.locator('#state').click();
    await this.page.locator("//span[text()=' New York']").click();
    await this.page.locator('#zip').fill('10528');
    await this.continue.click();
  }
}
