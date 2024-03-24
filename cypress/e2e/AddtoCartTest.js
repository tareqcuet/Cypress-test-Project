import AutomationUhomePage from "./PageObjects/AutomationUhomePage.js"
import AccountLoginPage from "./PageObjects/AccountLoginPage.js"
import MyAccountPage from "./PageObjects/MyAccountPage.js"
import ShoppingCartPage from "./PageObjects/ShoppingCartPage.js"


describe('User can add products to cart in different ways', () => {
    let testData;
    const automationUhomePage = new AutomationUhomePage();
    const accountLoginPage = new AccountLoginPage();
    const myAccountPage = new MyAccountPage();
    const shoppingCartPage = new ShoppingCartPage();

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
    automationUhomePage.navigateToCart();
    shoppingCartPage.removeTheFirstItemFromCart();

    automationUhomePage.navigateToMyAccount();
    myAccountPage.clickOnLogoutCTA();

    automationUhomePage.navigateToHome();
    cy.screenshot()
    })

  //  after(() => {
  //   automationUhomePage.navigateToMyAccount();
  //   myAccountPage.clickOnLogoutCTA();
  //  })


  it('Verify logged in user can add items to cart from featured products ', () => {
    automationUhomePage.clickOnAddToCardFromFeaturedProduct();

    })

  it('Verify logged in user can add items to cart from latest products ', () => {
    cy.wait(10000);
    automationUhomePage.clickOnAddToCardFromLatestProduct();
    })

  it('Verify logged in user can add items to cart from best seller products ', () => {
    cy.wait(10000);
    automationUhomePage.clickOnAddToCardFromBestSellersProduct();
      })


  })