/// <reference types ="cypress"/>

class Creditmonitoring {

  
    monitoring (compname) {
    
    cy.checkit ()
    cy.wait (3000)
    cy.on('uncaught:exception', (err, runnable) => {

        return false
    })


    cy.get ("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(3) > a").click ()
    cy.wait(3000)
    cy.log("Click Credit Monitoring")

    cy.get ("#keywords") .type (compname)
    cy.log("Search for the company")

    // cy.get ("#monitoringListTable > app-list > app-table > div > div.flex-table.row.knowitRow.list-bottom-margin.ng-star-inserted > div.field_companyName.flex-row.ng-star-inserted > a").clear ()
    // cy.wait(3000)
    // cy.log("Clear search")

    cy.get("#monitoringListTable > app-list > app-table > div > div:nth-child(3) > div.field_companyName.flex-row.ng-star-inserted > a").click ()
    cy.wait(10000)
    cy.log("Click on the company name ")
    cy.go ("back")
    cy.wait(3000)
    cy.log("Return to the previous page")

    cy.get("#monitoringListTable > app-list > app-table > div > div:nth-child(3) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li:nth-child(2) > app-button > button") .click ()
    cy.wait(3000)
    cy.log("Click use credits to purchase credit report")

 return this
    
}
}

export default Creditmonitoring