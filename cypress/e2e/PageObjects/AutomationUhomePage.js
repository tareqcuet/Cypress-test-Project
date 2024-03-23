class AutomationUhomePage
{
    homeNavigation = '.logo > img'
    loginOrRegisterCTAatTopBanner = '#customer_menu_top > li > a'
    welcomeNoteForLoggedInUser = '#customer_menu_top > :nth-child(1) > .top > .menu_text'

    //profileIconForLoggedInUser = 
    addToCartIconForFeaturedProduct = '#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa'
    addToCartIconForLatestProduct = '#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa'
    addToCartIconForBestSellersProduct = '#block_frame_bestsellers_1771 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa'


    navigateToHome()
    {
        cy.get(this.homeNavigation).click();
    }

    navigateToMyAccount()
    {
        cy.get(this.welcomeNoteForLoggedInUser).click();
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

    clickOnAddToCardFromFeaturedProduct()
    {
        cy.get(this.addToCartIconForFeaturedProduct).click();
    }

    clickOnAddToCardFromLatestProduct()
    {
        cy.get(this.addToCartIconForLatestProduct).click();
    }

    clickOnAddToCardFromBestSellersProduct()
    {
        cy.get(this.addToCartIconForBestSellersProduct).click();
    }



}

export default AutomationUhomePage;