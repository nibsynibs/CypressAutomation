import CheckitDashboard from "../PageObjects/Check-itDashboard.cy"

describe ("Check-it Dashboard", () => {
    it ("Check Dashboard" , function () {

        cy.login()

        const CD = new CheckitDashboard ()
        CD.CheckDashboard () ;
        CD.DisableData ()
        
    })


})