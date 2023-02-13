///<reference types = "cypress"/>

class SusbcriptionDowngrade {

    Createsubscription () {

       cy.get("#createIcon") .click ()
       cy.log ("Click on the + button")

        cy.get("#createDropdown > div > ul > li").click
        cy.log("Click Create Subscription")

        cy.get("#companynameLookup") .type("JP accountancy")
        cy.wait(2000)
        cy.get("#createcompanyForm > form > div.ng-star-inserted > app-lookup > div > div.results.ng-star-inserted.active > ul > li:nth-child(2) > p.companyName") .click ()
        cy.get("#createcompanyForm > form > div.formButtons > app-button > button").click ()
        cy.wait(3000)
        cy.log("Select the first company from the search and then click get started")
        cy.get("#confirmSubscriptionDetails") .click ()
        cy.wait(10000)
        cy.log("Click cnfirm")

        return this

    }

   ConnectLedger () {

    cy.on("uncaught:exception", (err, runnable) => {

        return false
      })

            
   cy. get ("#container > app-navigation-bar > app-navigation-section.my-integrations.ng-star-inserted > header > h2") .click () ;
   cy. wait (3000) ;
   cy. log ("Click on My integrations tab") ;
    
   cy.get("#integrationSectionHeader > div.buttons > app-button.ng-star-inserted > button").click () ;
   cy.wait(3000) ;
   cy.log ("click on Add Ledger") ;

   cy.get ("#connectLedgerModal > div > div > div.accountsOptions > ul > li.xero > img") .click ()
   cy.wait(3000)
   cy.log("Click on Xero ledger")


   cy.origin('https://login.xero.com', () => {
      
   cy.get ("#xl-form-email") .type ("nibesh@know-it.co.uk")
   cy.log("Enter xero username")
   cy.get("#xl-form-password") .type ("Kit@123456")
   cy.log("Enter xero password")
   cy.get("#xl-form-submit") .click ();
   cy.wait(5000)
   cy.log("Login to xero")
  })


   cy.origin("https://authorize.xero.com", function () {
   cy.get ("#multipleTenants > div > button") .click()
   cy.wait(3000)
   cy.get("#\\37 7b0b224-624e-4fc7-9578-5bcc8a75fcc6 > button > span").click ()
   cy.wait(2000)


   cy.get("#approveButton") .click ()
   cy.wait(10000)
   cy.log("Select ledger and allow access")
  })

  return this

}

  CheckitDashboard () {

    cy.get("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > header > img"). click ()
    cy.get("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(1) > a") .click ()
    Cypress.log("Click on Check-it Dashboard")

    cy.get("#creditReportMonitoringList > div > app-list > app-table > div > div:nth-child(2) > div.field_change.flex-row.ng-star-inserted > div > div > a") .click ()
    cy.wait(3000)
    cy.log("Click on Purchase to vide on the Credit Monitoring Section")

    cy.go('back')
    cy.wait(3000)
    cy.log("click to go back")

   cy.get("#creditReportMonitoringList > div > app-list > app-table > div > div:nth-child(2) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li:nth-child(2) > app-button > button") .click ()
   cy.wait(3000)
   cy.log("Click Use Credits)")

   return this


  }




   }


export default SusbcriptionDowngrade









    





}