class UserRegistrationPage
{
    //Home Button on Top Banner
    createAccountTextInRegistationPagePosition='.maintext'
    errorPositionForMissingAttribute = '.alert'

    //Your Personal Details
    firstName = '#AccountFrm_firstname'
    lastName = '#AccountFrm_lastname'
    email = '#AccountFrm_email'
    telephone = '#AccountFrm_telephone'
    fax = '#AccountFrm_fax' 

    //Your Address
    company = '#AccountFrm_company' 
    address1 = '#AccountFrm_address_1' 
    address2 = '#AccountFrm_address_2' 
    city = '#AccountFrm_city' 
    region = '#AccountFrm_zone_id' 
    zipCode = '#AccountFrm_postcode' 
    country = '#AccountFrm_country_id' 

     //Login Details
    loginName = '#AccountFrm_loginname'  
    password = '#AccountFrm_password' 
    confirmPassword = '#AccountFrm_confirm'  

    //Newsletter
    subscribeYes = '[for="AccountFrm_newsletter1"]'
    subscribeNo = '[for="AccountFrm_newsletter0"]'
    privacyPolicyCheckBox = '#AccountFrm_agree'
    continueBtn = '.col-md-2 > .btn'


    validateAssertionForRegistrationPage()
    {
     //cy.get(this.errorPositionForMissingAttribute).should('contain.text', errorMessage);
        cy.get(this.createAccountTextInRegistationPagePosition).should('contain.text', ' Create Account');
        cy.get(this.createAccountTextInRegistationPagePosition).invoke('text').should('match', /Create Account/);
    }

    insertPersonalDetailsAttributesForRegistration(firstName, lastName, email, telephone, fax)
    {
        cy.get(this.firstName).type(firstName);
        cy.get(this.lastName).type(lastName);
        cy.get(this.email).type(email);
        cy.get(this.telephone).type(telephone);
        cy.get(this.fax).type(fax);
    }

    insertPersonalDetailsAttributesForRegistrationMissingFirstName(lastName, email, telephone, fax)
    {
        cy.get(this.lastName).type(lastName);
        cy.get(this.email).type(email);
        cy.get(this.telephone).type(telephone);
        cy.get(this.fax).type(fax);
    }

    verifyErrorMessageForMissingMandatoryAttributeFirstName()
    {
    //cy.get(this.errorPositionForMissingAttribute).should('contain.text', errorMessage);
    //cy.get(this.errorPositionForMissingAttribute).should('have.value', 'First Name must be between 1 and 32 characters!');
    cy.get(this.errorPositionForMissingAttribute).invoke('text').should('match', /First Name must be between 1 and 32 characters!/);  
    }

   verifyErrorMessageForRegistrationTwiceWithSameUsername()
    {
    //cy.get(this.errorPositionForMissingAttribute).should('contain.text', errorMessage);
    //cy.get(this.errorPositionForMissingAttribute).should('have.value', 'First Name must be between 1 and 32 characters!');
        cy.get(this.errorPositionForMissingAttribute).invoke('text').should('match', /Error: E-Mail Address is already registered!/);  
    }

    insertAddressAttributesForRegistration(company, address1, address2, country,city,region,zipCode)
    {
        cy.get(this.company).type(company);
        cy.get(this.address1).type(address1);
        cy.get(this.address2).type(address2);
        cy.get(this.country).select(country);
        cy.get(this.city).type(city);
        cy.get(this.region).select(region);
        cy.get(this.zipCode).type(zipCode);
    }

    insertLoginDetailsAttributesForRegistration(loginName, password, confirmPassword)
    {
        cy.get(this.loginName).type(loginName);
        cy.get(this.password).type(password);
        cy.get(this.confirmPassword).type(confirmPassword);

    }

    selectNewsletterRadioBtnYes()
    {
        cy.get(this.subscribeYes).check();
    }

    selectNewsletterRadioBtnNo()
    {
        cy.get(this.subscribeNo).check();
    }
    checkPrivacyPolicyCheckBox()
    {
        cy.get(this.privacyPolicyCheckBox).check();
    }

    clickOnContinueSubmitBtn()
    {
        cy.get(this.continueBtn).click();
    }
}

export default UserRegistrationPage;