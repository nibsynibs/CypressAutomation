///<reference types ="cypress"/>

import SusbcriptionDowngrade from "../PageObjects/FreePlan.cy"

describe ("free-pan subscription", function () {
    it ("Credit Monitoring purchase on a free plan" , function () {

cy.login()
const su = new SusbcriptionDowngrade ()
su.Createsubscription ()
su.ConnectLedger ()
su.CheckitDashboard ()
cy.logout ()


    })



})


