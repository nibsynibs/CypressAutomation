///<reference types = "cypress" />

class CreditReports {

CreditReports (compname) {

cy.checkit ()
cy. get ("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(2) > a") .click ()
cy.wait (2000)
cy.log ("click on Check-it and then on Credit Reports")

cy.get ("#creditReportsListTable > app-list > app-table > div > div.listFilters.ng-star-inserted > a").click ()
cy.log ("click on New Credit Reports")

cy.get ("#creditSafeForm > div:nth-child(1) > div:nth-child(1) > input") . type (compname)
cy.get ("#creditSafeForm > div:nth-child(3) > div > button") .click ()
cy.log ("Enter company name and click Search")

cy.get ("#creditSafeList > app-list > app-table > div > div:nth-child(3) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li > app-button > button").click ()

return this

}
}

























