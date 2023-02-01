///<reference types = "cypress"/>

import  collectitCase from "../PageObjects/CollectitCases"

describe ("collect-it cases" , function () {
    it ("cases" , function (){

    cy.login ()
    const cs = new collectitCase ()
    cs.cases (" DIISR - Small Business Services")
    cy.logout ()

    })

})