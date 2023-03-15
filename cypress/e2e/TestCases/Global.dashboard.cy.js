///<reference types="cypress"/>

import GlobalDashboard from "../PageObjects/GlobDashboard.cy";


describe("Global Dashboard", () => {
    it("Global Dashboard data test" , function () {

        cy.login ()
        const gd = new GlobalDashboard ()
        gd.MainDashboard ()
        gd.Calendar ()
        // gd.Checkit()
        gd.chaseit()
        // gd.collectit ()







    })

})