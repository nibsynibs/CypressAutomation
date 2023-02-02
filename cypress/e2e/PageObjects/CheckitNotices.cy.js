/// <reference types = "cypress"/>

class CheckitNotices {

    notices (compname) {

        cy.get ("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(4) > a"). click ()
        cy.wait (3000)
        cy.log ("click on notices")
        
        cy. get ("#company_name"). type (compname)

        cy.get ("#noticesList > app-list > app-table > div > div.flex-table.row.knowitRow.list-bottom-margin.ng-star-inserted > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li > button").click ()
        cy.wait(5000)
        cy.log ("Click view notices")

        cy.get("#content > app-notices > app-slidepanel > div.slidePanelContent > div > div.slidePanelButtons > div > app-button > button").click ()
        cy.wait(2000)
        cy.log("cclose view button")

        cy.get ("#company_name").clear ().click ()

        cy.get ("#notice_type"). select (4)
        cy.get ("#sector").select (11)
        cy.wait(5000)
        cy.log ("select filters")

        return this
    }

   
}

export default CheckitNotices