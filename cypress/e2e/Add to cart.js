import AutomationUhomePage from "./PageObjects/AutomationUhomePage.js"
import AccountLoginPage from "./PageObjects/AccountLoginPage.js"

describe('User can add products to cart in different ways', () => {
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

    accountLoginPage.insertLoginNamePasswordForLogin(testData.loginName,testData.password);
    accountLoginPage.clickOnLoginBtn();
    automationUhomePage.verifyWelcomeNoteAfterSuccessfulLoginOrRegistration();
    automationUhomePage.navigateToHome();
    })

 afterEach(() => {
    automationUhomePage.navigateToHome();
    cy.screenshot()
    })

  it('Verify logged in user can add items to cart from featured products ', () => {
    automationUhomePage.clickOnAddToCardFromFeaturedProduct();

    })

  it('Verify logged in user can add items to cart from latest products ', () => {
    automationUhomePage.clickOnAddToCardFromLatestProduct();
    })

  it('Verify logged in user can add items to cart from best seller products ', () => {
    automationUhomePage.clickOnAddToCardFromBestSellersProduct();
      })


  })