///<reference types = "cypress"/>

import chasesettings from "../PageObjects/ChaseitSettings.cy" ;

describe ("Chase-it settings" , function () {
   
   it ("settings",function () {

    cy.login ()
    const set = new chasesettings ()
    set.Settings ()
   //  set.SelectLedger ()
    set.Letter ("pink Floyd Ltd", "1236545", "55 test avenue" , "Tester's test", "Test toon", "Test county", "TS8 6JJ")
    set.changeemailsettings
    cy.logout () 
    

   })

})