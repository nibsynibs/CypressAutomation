/// <reference types ="cypress"/>

class Creditmonitoring {

    monitoring (compname) {
    cy.get ("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(3) > a").click ()
    cy.wait(3000)
    cy.log("Click Credit Monitoring")

    cy.get ("#keywords") .type (compname)
    cy.get ("#monitoringListTable > app-list > app-table > div > div.flex-table.row.knowitRow.list-bottom-margin.ng-star-inserted > div.field_companyName.flex-row.ng-star-inserted > a").click ()
    cy.wait (3000)

 return this
    
}
}

export default Creditmonitoring