class RahulShettyAngularPage
{
    name = ':nth-child(1) > .form-control'
    email = ':nth-child(2) > .form-control'
    password = '#exampleInputPassword1'
    checkbox = '#exampleCheck1'
    gender = '#exampleFormControlSelect1'
    employeeStatusStudent = '#inlineRadio1'
    employeeStatusEmployed = '#inlineRadio2'
    employeeStatusEntrepreneur = '#inlineRadio3'
    dateOfBirth = ':nth-child(8) > .form-control'
    submitBtn = '.btn'
    twoWayBinding = ':nth-child(4) > .ng-untouched'

    
    clickOnProfileIconForGuestUser()
    {
        cy.get(this.profileIconForGuestUser).click();

    }

    clickOnLoginCTA()
    {
        cy.get(this.ctaLogin).click();

    }

}

export default RahulShettyAngularPage;