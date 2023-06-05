///<reference types = "cypress"/>

import MyInt from "../PageObjects/Integration.cy" 
import "cypress-file-upload"

describe ("Know-it Ledger management", function() {
 
    it ("Ledger license and add ledger", function () {

        cy.login() 
        const ld = new  MyInt () 
        ld. AddLedgerLicence ()
        // ld.AddNewQBLedger ()
        // ld.AddNewXeroLedger ()
        // ld.CsvUpload ()
        cy.logout () 

 })  


})