///<reference types = "cypress"/>

class ChaseDashboard {

    Dashboard () {

        cy.get ("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > header > img").click ()
        cy.log("Click on the chase it")
        cy.wait(3000)


        cy.get("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > ul > li:nth-child(1) > a").click ()
        cy.log("click on the dashboard")
        cy.wait(3000)

       
        

        return this
    }

    AgedDebtor () {
        cy.get("#agedDebtorsList > div > app-list > app-table > div > div:nth-child(4) > div.field_debtoractions.flex-row.ng-star-inserted > app-actions > ul > li > button").click ()
           
        cy.wait(3000)
        cy.log ("click on Collect-it  Aged Debtor")

        cy.get("#collectInvoiceList > app-list > app-table > div > div.flex-table.header > div.flex-row.headerInvoiceid.ng-star-inserted > input") .check()
        cy.wait(3000)
        cy.log("check select all")

        cy.get("#collectInvoiceList > div > app-button > button"). click ()
        cy.wait (5000)
        cy.log("click submit-it")

        cy.get ("#backButton > button") .click ()
        cy.wait (5000)
        cy.log("click on the cancel button")

        cy.get ("#dashboard > div:nth-child(4) > app-aged-debtors-list > app-modal > div > div > div").click ()
        cy.log("Cross the pop up")
        cy.wait(3000)

        cy.get("#agedDebtorsList > div > app-list > app-table > div > div:nth-child(4) > div.field_debtoractions.flex-row.ng-star-inserted > app-actions > ul > li > button").click ()
        cy.wait(3000)
        cy.log ("click on Collect-it  Aged Debtor")


        // cy.get("#ourRef").type ("inv-001-0")
        // cy.wait(3000)
        // cy.get("#chase > app-invoice-list > app-modal > div > div > div").click ()
       

        cy.get("#collectInvoiceList > app-list > app-table > div > div.flex-table.row.knowitRow.list-bottom-margin.ng-star-inserted > div.field_invoiceId.flex-row.ng-star-inserted > div > input").check ()
        cy.wait(3000)
        cy.log("Seelct an invoice to submit")
        

        cy.get("#collectInvoiceList > div > app-button > button"). click ()
        cy.wait (5000)
        cy.log("click on submit")

        cy.get("#contactNumber") .type ("0192802939")
        cy.log("Enter phone number")
        cy.wait(3000)

        cy.get("#sendToCollectForm > form > div.formButtons > app-button:nth-child(2) > button").click ()
        cy.log("Click on the submit button")
        cy.wait(10000)

       return this 
 
 }

}

export default ChaseDashboard