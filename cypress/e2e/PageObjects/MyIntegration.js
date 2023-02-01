///<reference types = "cypress"/> 

class MyInt {

    AddLedgerLicence () {

        cy. get ("#container > app-navigation-bar > app-navigation-section.my-integrations.ng-star-inserted > header > h2") .click () ;
        cy. wait (3000) ;
        cy. log ("Click on My integrations tab") ;

        cy.get ("#integrationSectionHeader > div.buttons > app-button:nth-child(1) > button") .click ()
        cy. wait (3000) ;
        cy. log ("Click on My Add Licences button") ;

         cy.get ("#productList > section.account > div.products > div:nth-child(2) > div.product-box-right > div.product-box-right_bottom > button") .click () ;
         cy. wait (3000) ;
         cy. log (" cLick Add to Basket for ledgers to add additional ledgers") ;


         cy.get ("#productList > div > div > button"). click ()
         cy.wait(3000)
         cy.log ("Click checkout")

         for(let i = 0 ; i<10 ; i++) {
         cy.get ("#basketItems > tbody.basket-items > tr > td.center.qtyControls.ng-star-inserted > span.increaseQty") .click () 
         }
         cy.wait (3000)
         cy.log("Add the quantity x 9")

        cy.get("#basketBox > app-button > button") .click ()
        cy.wait(3000)
        cy.log ("Click Checkout")


        return this 

    }

    AddNewQBLedger () {

    cy. get ("#container > app-navigation-bar > app-navigation-section.my-integrations.ng-star-inserted > header > h2") .click () ;
    cy. wait (3000) ;
    cy. log ("Click on My integrations tab") ;

    cy.get("#integrationSectionHeader > div.buttons > app-button.ng-star-inserted > button").click () ;
    cy.wait(3000) ;
    cy.log ("click on Add Ledger") ;

    cy.get("#connectLedgerModal > div > div > div.accountsOptions > ul > li.quickbooks > img").click () ;
    cy.wait(5000)
    cy.log ("connect quickbooks ledger") ; 

    cy.origin('https://accounts.intuit.com', () => {

    cy.get ("#ius-userid").type ("nibesh@know-it.co.uk") ;
    cy.get ("#ius-password").type ("Kit@12345678") ;
    cy.get ("#ius-sign-in-submit-btn-text") .click () ; 
    cy.wait (5000)
    cy.log("Enter QB username and password and click Sign in") ;

     }) ;


    cy.origin('https://appcenter.intuit.com', () => {

      cy.get ("#idsDropdownTypeaheadTextField2").click ()
      cy.wait(2000)
      cy.log("click on the search company dropdown")

      cy.get("#idsDropdownTypeahead1-item-6 > li > div > div").click ()
      cy.wait(2000)
      cy.log("select ledger")
         
           
      cy.get ("#app > div.shell-view > div > div > div.body > div > div > div > div > div.container-footer > div > button.StyledButton__Wrapper-vnaxcc-1.gYvrJh.pull-right.btn-next").click ()
      cy.wait(3000)
      cy.log ("Click on the next button")

      cy.get("#app > div.shell-view > div > div > div.body > div > div > div > div > div.authorize-actions-visual-update > form > button").click ()
      cy.wait(2000)
      cy.log("click on the connect button")

   
       }) ;


       return this

  
    }

    AddNewXeroLedger (){
    
    
   cy. get ("#container > app-navigation-bar > app-navigation-section.my-integrations.ng-star-inserted > header > h2") .click () ;
   cy. wait (3000) ;
   cy. log ("Click on My integrations tab") ;
    
   cy.get("#integrationSectionHeader > div.buttons > app-button.ng-star-inserted > button").click () ;
   cy.wait(3000) ;
   cy.log ("click on Add Ledger") ;

   cy.get ("#connectLedgerModal > div > div > div.accountsOptions > ul > li.xero > img") .click ()
   cy.wait(3000)
   cy.log("Click on Xero ledger")

   cy.get ("#xl-form-email") .type ("nibesh@know-it.co.uk")
   cy.log("Enter xero username")
   cy.get("#xl-form-password") .type ("Kit@123456")
   cy.log("Enter xero password")
   cy.get("#xl-form-submit") .click ();


   return this

    }

    }

export default MyInt 



         


         














    



