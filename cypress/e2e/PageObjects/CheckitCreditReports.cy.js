///<reference types = "cypress" />

class CreditReports {

CreditReport (compname) {

    cy.checkit ()
    cy.wait (3000)
    cy.on('uncaught:exception', (err, runnable) => {

        return false
    })

cy. get ("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(2) > a") .click ()
cy.wait (3000)
cy.log ("click on Check-it and then on Credit Reports")

cy.get ("#creditReportsListTable > app-list > app-table > div > div.listFilters.ng-star-inserted > a").click ()
cy.wait (3000)
cy.log ("click on New Credit Reports")


cy.get ("#creditSafeForm > div:nth-child(1) > div:nth-child(1) > input") . type (compname)
cy.get ("#creditSafeForm > div:nth-child(3) > div > button") .click ()
cy.wait (3000)
cy.log ("Enter company name and click Search")

cy.get ("#creditSafeList > app-list > app-table > div > div:nth-child(3) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li > app-button > button").click ()
cy.wait (3000)
cy.log("purchase credit report")

return this

}


Repurchase (compname) {

cy.get ("#creditReportsListTable > app-list > app-table > div > div.listFilters.ng-star-inserted > a").click ()
cy.wait (3000)
cy.log ("click on New Credit Reports")

cy.get ("#creditSafeForm > div:nth-child(1) > div:nth-child(1) > input") . type (compname)
cy.get ("#creditSafeForm > div:nth-child(3) > div > button") .click ()
cy.wait (3000)
cy.log ("Enter company name and click Search")

cy.get ("#creditSafeList > app-list > app-table > div > div:nth-child(3) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li:nth-child(1) > app-button > button") .click ()
cy.wait (3000)
cy.log ("purchase the same credit report again")

return this 
}

ViewCreditReport (compname){

    cy.get ("#creditReportsListTable > app-list > app-table > div > div.listFilters.ng-star-inserted > a").click ()
    cy.wait (3000)
    cy.log ("click on New Credit Reports")
    
    cy.get ("#creditSafeForm > div:nth-child(1) > div:nth-child(1) > input") . type (compname)
    cy.get ("#creditSafeForm > div:nth-child(3) > div > button") .click ()
    cy.wait (3000)
    cy.log ("Enter company name and click Search")
    
    cy.get ("#creditSafeList > app-list > app-table > div > div:nth-child(3) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li:nth-child(2) > app-button > button") .click ()
    // cy.wait (3000)
    cy.log ("View credit report")

    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(1) > li") .scrollIntoView({duration :2000})
    // cy.wait (3000)
    cy.log ("Click on summary and scroll to the bottom of the page")

    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(2) > li") .click ()
    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(2) > li") .scrollIntoView({duration :2000})
    // cy.wait (3000)
    cy.log ("Click on company profile and scroll to the bottom of the page")

    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(3) > li").click ()
    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(3) > li").scrollIntoView({duration :2000})
    // cy.wait (3000)
    cy.log ("Click on Ratings and scroll to the bottom of the page")

    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(4) > li") .click ()
    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(4) > li") .scrollIntoView({duration :2000})
    // cy.wait (3000)
    cy.log ("Click on Financial and scroll to the bottom of the page")

    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(5) > li") .click ()
    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(5) > li") .scrollIntoView({duration :2000})
    // cy.wait (3000)
    cy.log ("Click on payment behaviour and scroll to the bottom of the page")

    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(6) > li") .click ()
    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(6) > li") .scrollIntoView({duration :2000})
    // cy.wait (3000)
    cy.log ("Click on company structure and scroll to the bottom of the page")

    cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(7) > li") .click ()
    cy.wait (3000)
    cy.log ("Click on exceptional events and scroll to the bottom of the page")

    cy.get ("#printCreditReport") .click ()
    cy.wait (3000)
    cy.log("click on print credit report")

    return this 
}

}

export default CreditReports




















