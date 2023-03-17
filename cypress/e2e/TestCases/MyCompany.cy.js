///<reference types ="cypress"/>

import mycomp from "../PageObjects/Mycompanies.cy"

describe ("My comp" , function () {
    it ("My companies" , function () {

        cy.login ()
        const mc = new mycomp ()
        mc.Comp ()
        mc.Verifyrowsandcolumn ()
        mc.checkcelldata ()
        mc.SelectCompany ()
        // mc. Alerts ()
        mc.Row()
        mc.Companysearch ("Basket Case") 
        // mc.switchview ("Ridgeway University")
        cy.logout ()

       


    })


})
