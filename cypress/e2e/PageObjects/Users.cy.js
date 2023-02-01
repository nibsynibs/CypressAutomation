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

         for(let i = 0 ; i<=10 ; i++) {
         cy.get ("#basketItems > tbody.basket-items > tr > td.center.qtyControls.ng-star-inserted > span.increaseQty") .click () 
         }
         cy.wait (3000)
         cy.log("Add the quantity x 9")

         cy.get("#basketBox > app-button > button") .click ()
         cy.wait(3000)
         cy.log ("Click Checkout")


        return this 
    }

     AddUser (fname,lname,email){

        cy.get ("#userSectionHeader > div.buttons > app-button.ng-star-inserted > button").click ()
        cy.get("#userModal > div > div > div.cancelButton > p").click ()
        cy.wait(2000)
        cy.log("Click on Add User and then cancel")

        cy.get ("#userSectionHeader > div.buttons > app-button.ng-star-inserted > button").click ()
        cy.wait(2000)
        cy.log("Click on Add User ")

        cy.get("#firstname") .type (fname)
        cy.get("#lastname").type(lname)
        cy.get("#email").type(email)
        cy.get("#role > option:nth-child(2)").click ()
        cy.get("#adduserForm > form > div.ng-star-inserted > app-listfield > section > app-list > app-table > div > div:nth-child(2) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li > span").click ()
        cy.get("#adduserForm > form > div.formButtons > app-button > button").click ()
        cy.wait(3000)
        cy.log("Add user")

       return this

        }

    }


export default User 