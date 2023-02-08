///<reference types = "cypress"/>

import MyInt from "../PageObjects/MyIntegration" 

describe ("Know-it Ledger management", function() {
 
    it ("Ledger license and add ledger", function () {

        cy.login() 
        const ld = new  MyInt () 
        // ld. AddLedgerLicence ()
        // ld.AddNewQBLedger ()
        ld.AddNewXeroLedger ()
        cy.logout () 

 })  


})
    