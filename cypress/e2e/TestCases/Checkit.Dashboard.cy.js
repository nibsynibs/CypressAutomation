import CheckitDashboard from "../PageObjects/Check-itDashboard.cy"

describe ("Check-it Dashboard", () => {
    it ("Check Dashboard" , function () {

        cy.login()

        const CD = new CheckitDashboard ()
        CD.Dashboard ()
        CD.CreditMonitoring ()
        CD.CreditReports ()
        CD.UnsecuredCreditors ()
        CD. GazetteNotices ()
        cy.logout()
       



    })


})