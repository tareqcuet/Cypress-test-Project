import AutomationUhomePage from "./PageObjects/AutomationUhomePage.js"
import AccountLoginPage from "./PageObjects/AccountLoginPage.js"

describe('User Login', () => {
    let testData;
    const automationUhomePage = new AutomationUhomePage();
    const accountLoginPage = new AccountLoginPage();
  before(() => {
    // Load test data file
    cy.fixture('AutomationUdata.json').then((data) => {
      testData = data;
    });
    });

  beforeEach(() => {
  
    cy.visit(testData.HomeUrl);
    automationUhomePage.clickOnLoginOrRegisterCTAatTopBanner();
    })

 afterEach(() => {
    automationUhomePage.navigateToHome();
    cy.screenshot()
    })

  it('Verify user is landing on Login page', () => {
    accountLoginPage.validateAssertionForLoginPage();
    })

  it('User can Login with valid credentials', () => {
    accountLoginPage.insertLoginNamePasswordForLogin(testData.loginName,testData.password);
   
    accountLoginPage.clickOnLoginBtn();
    automationUhomePage.verifyWelcomeNoteAfterSuccessfulLoginOrRegistration();
    })


  })