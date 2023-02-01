///<reference types = "cypress"/>

import User from "../PageObjects/Users.cy"

describe ("user test" , function() {
    it ("Users" , function (){

cy.login()
const us = new User ()
us.AddUserLicence ()
us.AddUser ("James", "Smithson","account2023-2@test.com")
cy.logout ()



    })

})