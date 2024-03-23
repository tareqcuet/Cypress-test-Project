import Login from "../PageObjects/LoginPage.js"
import RahulShettyAngularPage from "../PageObjects/RahulShettyAngularPage.js"

describe('Rahul Shetty all type of page element interaction', () => {

  beforeEach(() => {
    // root-level hook
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    // runs before every test block
  })

    it('Check all types of assertion', () => {

      const rahulShettyAngularPage = new RahulShettyAngularPage();
      cy.wait(5000)
      //homePage.clickOnProfileIconForGuestUser();
      //homePage.clickOnLoginCTA();

      //const login = new Login();
      //cy.wait(5000)
      //login.clickOnPasswordToggle()
      //login.setUserNameForPasswordLogin("01675526601")
      //login.setPassword("P01675526601")
      //login.clickLoginBtn()

    })

  })