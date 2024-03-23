class MyAccountPage
{
    logoutCTA = '.side_account_list > :nth-child(10) > a'
    
    clickOnLogoutCTA()
    {
        cy.get(this.logoutCTA).click();

    }

}

export default MyAccountPage;