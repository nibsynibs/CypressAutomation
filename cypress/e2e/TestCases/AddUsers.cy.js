///<reference types = "cypress"/>

import User from "../PageObjects/Users.cy"

describe ("user test" , function() {
    it ("Users" , function (){

cy.login()
const us = new User ()
us.AddUserLicence ()
cy.logout ()



    })

})