class AccountLoginPage
{
    userRegisterContinueBtn = '#accountFrm > fieldset > .btn'
    returningCustomerLoginSection = '.returncustomer > .loginbox > .heading4'

    loginName = '#loginFrm_loginname'
    password = '#loginFrm_password'
    loginBtn = '#loginFrm > fieldset > .btn'
    
    clickOnUserRegisterContinueBtn()
    {
        cy.get(this.userRegisterContinueBtn).click();

    }

    validateAssertionForLoginPage()
    {
     //cy.get(this.errorPositionForMissingAttribute).should('contain.text', errorMessage);
        cy.get(this.returningCustomerLoginSection).should('contain.text', 'I am a returning customer.');
        cy.get(this.returningCustomerLoginSection).invoke('text').should('match', /I am a returning customer./);
    }

    insertLoginNamePasswordForLogin(loginName, password)
    {
        cy.get(this.loginName).type(loginName);
        cy.get(this.password).type(password);
    }

    clickOnLoginBtn()
    {
        cy.get(this.loginBtn).click();

    }

}

export default AccountLoginPage;