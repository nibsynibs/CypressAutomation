///<reference types = "cypress"/>

import Userlicenseandadd from "../PageObjects/Users.cy"

describe ("user test" , function() {
    it ("Users" , function (){

cy.login()
const usr = new Userlicenseandadd()
usr.AddUserLicence ()
usr.AddUser ("James", "Smithson","account2023-2@test.com")
cy.logout ()



    })

})
