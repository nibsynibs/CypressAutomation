///<reference types = "cypress"/> 

class User {

    AddUserLicence () {

        cy. get ("#container > app-navigation-bar > app-navigation-section.my-integrations.ng-star-inserted > header > h2") .click () ;
        cy. wait (3000) ;
        cy. log ("Click on My integrations tab") ;

        cy.get ("#tabs > div > div.tabsContent > ul > app-tab:nth-child(4) > li") .click () ;
        cy.wait (3000)
        cy.log("click on the user tab")

      

        cy.get ("#userSectionHeader > div.buttons > app-button > button") .click ()
        cy. wait (3000) ;
        cy. log ("Click on Buy  Licences button") ;

         cy.get ("#productList > section.account > div.products > div:nth-child(1) > div.product-box-right > div.product-box-right_bottom > button") .click () ;
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
}

export default User 