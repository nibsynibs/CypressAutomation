///<reference types="cypress"/>

import GlobalDashboard from "../PageObjects/GlobDashboard.cy";

describe ("Global Dashboard",() => {
    it ("All the globaldashboard functionality", function () {

    cy.login() ;
    const gd = new GlobalDashboard ()
    // gd.skipledger () ;
    // gd.DisableDashboardData() ;
    // gd.ConnectQBLedger();
    gd.Enabledashboarddata ();
    gd.Calendar ();

    })

})