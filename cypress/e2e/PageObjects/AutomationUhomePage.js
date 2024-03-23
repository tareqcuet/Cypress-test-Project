class AutomationUhomePage
{
    homeNavigation = '.logo > img'
    loginOrRegisterCTAatTopBanner = '#customer_menu_top > li > a'
    welcomeNoteForLoggedInUser = '#customer_menu_top > :nth-child(1) > .top > .menu_text'
    //profileIconForLoggedInUser = 
    
    navigateToHome()
    {
        cy.get(this.homeNavigation).click();
    }

    clickOnLoginOrRegisterCTAatTopBanner()
    {
        cy.get(this.loginOrRegisterCTAatTopBanner).click();

    }

    verifyWelcomeNoteAfterSuccessfulLoginOrRegistration()
    {
        //cy.get(this.welcomeNoteForLoggedInUser).should('contain.text', 'Welcome back');
        cy.get(this.welcomeNoteForLoggedInUser).invoke('text').should('match', /Welcome back/);

    }


}

export default AutomationUhomePage;