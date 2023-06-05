///<reference types = "cypress"/>

class SusbcriptionDowngrade {

    Createsubscription () {

      cy.get("#createIcon") .click ()
      cy.log ("Click on the + button")

      cy.xpath("//li[@class='ng-tns-c274-2']").click ()
      cy.log("Click Create Subscription")
        

       cy.xpath("//input[@id='companynameLookup']") .click ()
       cy.xpath("//input[@id='companynameLookup']") .type("JP Accountancy")
       cy.wait(10000)
       cy.xpath('//li[@class="companiesHouseResult ng-star-inserted"]').contains("07187190").click()
       cy.wait(10000)
       cy.xpath('//*[@id="createcompanyForm"]/form/div[2]/app-button/button') .click ()
       cy.xpath('//*[@id="confirmSubscriptionDetails"]').click ()
       cy.wait(10000)

       


        return this

    }

   ConnectLedger () {

    cy.on("uncaught:exception", (err, runnable) => {

        return false
      })

    cy. xpath ('//*[@id="container"]/app-navigation-bar/app-navigation-section[9]/header/h2') .click () ;
    cy. wait (15000) ;
    cy. log ("Click on My integrations tab") ;
 

    cy.get("#integrationSectionHeader > div.buttons > app-button.ng-star-inserted > button").click () ;
    cy.wait(8000) ;
    cy.log ("click on Add Ledger") ;

    cy.get("#connectLedgerModal > div > div > div.accountsOptions > ul > li.quickbooks > img").click () ;
    cy.wait(10000)
    cy.log ("connect quickbooks ledger") ; 

    cy.origin('https://accounts.intuit.com', () => {

    cy.get ("#iux-username-password-sign-in-user-id-input").type ("nibesh@know-it.co.uk") ;
    cy.get ("#iux-username-password-sign-in-password-input").type ("Kit@12345678") ;
    cy.wait(10000)
    cy.get("#ius-sign-in-widget > div > div > div.Bookends__NonStyledDiv-sc-163uul4-4.jdWbPG > div.styledComponents__StyledWidgetContainer-sc-12vb80e-14.lcEcRk.ius > div.UsernamePasswordSignIn__StyledUsernamePasswordSignInContainer-sc-9mm0lb-0.lBBBb > form > button") .click ()
    cy.wait(10000)
    cy.log("Enter QB username and password and click Sign in") ;

     }) ;


    cy.origin('https://appcenter.intuit.com', () => {

    //  cy.get('#idsDropdownTypeaheadTextField2') .click ()
    //  cy.wait(10000)
     cy.get('#idsDropdownTypeaheadTextField2').type ("Statement test with small data").type ('{downArrow}') .type ('{enter}')
     cy.wait(10000)


       
      // cy.get ("#app > div.shell-view > div > div > div.body > div > div > div > div > div.container-top > div > div:nth-child(3) > div > div > label > div > div > svg").click ()
      // cy.wait(10000)
      // cy.log("click on the search company dropdown")

      // cy.get("#idsDropdownTypeahead1-item-6 > li > div > div").click ()
      // cy.wait(10000)
      // cy.log("select ledger")
         
           
      cy.get ("#app > div.shell-view > div > div > div.body > div > div > div > div > div.container-footer > div > button.StyledButton__Wrapper-vnaxcc-1.gYvrJh.pull-right.btn-next").click ()
      cy.wait(10000)
      cy.log ("Click on the next button")

      cy.get("#app > div.shell-view > div > div > div.body > div > div > div > div > div.authorize-actions-visual-update > form > button").click ()
      cy.wait(10000)
      cy.log("click on the connect button")

      cy.wait(300000)
    })
   
      
      


       return this        
 

}

  CheckitDashboard () {

    cy.on('uncaught:exception' ,() => {

      return false


    })

    cy.get("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > header > img"). click ()
    cy.get("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(1) > a") .click ()
    cy.log("Click on Check-it Dashboard")

    cy.get("#creditReportMonitoringList > div > app-list > app-table > div > div:nth-child(2) > div.field_change.flex-row.ng-star-inserted > div > div > a") .click ()
    cy.wait(10000)
    cy.log("Click on Purchase to view on the Credit Monitoring Section")

    cy.get("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > header > img"). click ()
    cy.get("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(1) > a") .click ()
    cy.log("Click on Check-it Dashboard")

   cy.get("#creditReportMonitoringList > div > app-list > app-table > div > div:nth-child(2) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li:nth-child(2) > app-button > button") .click ()
   cy.wait(10000)
   cy.log("Click Use Credits)")

   return this


  }




   }


export default SusbcriptionDowngrade









    





