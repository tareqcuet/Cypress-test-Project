class ShoppingCartPage
{
    removeFromCartIcon = '.block_7 > .nav > .dropdown > .dropdown-toggle'
    
    removeTheFirstItemFromCart()
    {
        cy.get(this.removeFromCartIcon).click();

    }


}

export default ShoppingCartPage;