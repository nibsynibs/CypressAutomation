///<reference types = "cypress"/>

import ChaseDashboard from "../PageObjects/ChaseItDashboard.cy"

describe ("Know-it Chase dashboard", function () {

    it ("chaseit dashboard", function (){

        cy.login ()
        const ch = new ChaseDashboard ()
        ch.Dashboard ()
        ch.AgedDebtor ()
        cy.logout ()


    })
})