import AutomationUhomePage from "./PageObjects/AutomationUhomePage.js"
import AccountLoginPage from "./PageObjects/AccountLoginPage.js"
import UserRegistrationPage from "./PageObjects/UserRegistrationPage.js"

describe('User Registration', () => {
    let testData;
    const automationUhomePage = new AutomationUhomePage();
    const accountLoginPage = new AccountLoginPage();
    const userRegistrationPage = new UserRegistrationPage();
  before(() => {
    // Load test data file
    cy.fixture('AutomationUdata.json').then((data) => {
      testData = data;
    });
    });

  beforeEach(() => {
  
    cy.visit(testData.HomeUrl);
    automationUhomePage.clickOnLoginOrRegisterCTAatTopBanner();
    accountLoginPage.clickOnUserRegisterContinueBtn();
    })

 afterEach(() => {
    automationUhomePage.navigateToHome();
    cy.screenshot()
    })

  it('Verify user is landing on registration page', () => {
    userRegistrationPage.validateAssertionForRegistrationPage();
    })

  it('Error should display for missing mandatory attribute', () => {
    userRegistrationPage.insertPersonalDetailsAttributesForRegistrationMissingFirstName(testData.lastName,testData.email, testData.telephone, testData.fax);
    userRegistrationPage.insertAddressAttributesForRegistration(testData.company,testData.address1, testData.address2, testData.country,testData.city, testData.region,testData.zipCode);
    userRegistrationPage.insertLoginDetailsAttributesForRegistration(testData.loginName,testData.password, testData.confirmPassword);
    //userRegistrationPage.selectNewsletterRadioBtnYes();
    userRegistrationPage.checkPrivacyPolicyCheckBox();
    userRegistrationPage.clickOnContinueSubmitBtn();
    userRegistrationPage.verifyErrorMessageForMissingMandatoryAttributeFirstName();
    })

  it('User can register with valid information', () => {
    userRegistrationPage.insertPersonalDetailsAttributesForRegistration(testData.firstName,testData.lastName,testData.email, testData.telephone, testData.fax);
    userRegistrationPage.insertAddressAttributesForRegistration(testData.company,testData.address1, testData.address2, testData.country,testData.city, testData.region,testData.zipCode);
    userRegistrationPage.insertLoginDetailsAttributesForRegistration(testData.loginName,testData.password, testData.confirmPassword);
    //userRegistrationPage.selectNewsletterRadioBtnYes();
    userRegistrationPage.checkPrivacyPolicyCheckBox();
    userRegistrationPage.clickOnContinueSubmitBtn();
    automationUhomePage.verifyWelcomeNoteAfterSuccessfulLoginOrRegistration();
    })

    it('Already registered user will get error message while trying to register again', () => {
      userRegistrationPage.insertPersonalDetailsAttributesForRegistration(testData.firstName,testData.lastName,testData.email, testData.telephone, testData.fax);
      userRegistrationPage.insertAddressAttributesForRegistration(testData.company,testData.address1, testData.address2, testData.country,testData.city, testData.region,testData.zipCode);
      userRegistrationPage.insertLoginDetailsAttributesForRegistration(testData.loginName,testData.password, testData.confirmPassword);
      //userRegistrationPage.selectNewsletterRadioBtnYes();
      userRegistrationPage.checkPrivacyPolicyCheckBox();
      userRegistrationPage.clickOnContinueSubmitBtn();
      userRegistrationPage.verifyErrorMessageForRegistrationTwiceWithSameUsername();
    })

    })