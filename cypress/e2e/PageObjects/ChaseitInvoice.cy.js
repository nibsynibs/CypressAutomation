///<reference types ="cypress"/>

class ChaseInvoices {


    Invoices () {
        
        cy.get ("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > header > img").click ()
        cy.log("Click on the chase it")

        cy.get ("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > ul > li:nth-child(5) > a").click ()
        cy.log ("click on Invoices")
        cy.wait (5000)

        return this

    }

        OutstandingInvoices () {
            cy.get("#invoiceListTable > app-list > div.groupWrapper.ng-star-inserted > div.groupItems.groupItemsContent.openResult.ng-star-inserted > div > div > app-actions > ul > li:nth-child(2) > button").click ()
            cy.log ("click on Collect-it quote")

               
            cy.get("#collectInvoiceList > app-list > app-table > div > div.flex-table.header > div.flex-row.headerInvoiceid.ng-star-inserted > input") .check ()
            cy.wait (5000)
            cy.log("check select all")
    
            cy.get("#collectInvoiceList > div > app-button > button"). click ()
            cy.wait (1000)
            cy.log("click on the continue button")
    
            cy.get ("#backButton > button") .click ()
            cy.wait (5000)
            cy.log("click on the cancel button")
    
            cy.get ("#chase > app-invoice-list > app-modal > div > div > div").click ()
            cy.log("Cross the pop up")

            cy.get("#invoiceListTable > app-list > div.groupWrapper.ng-star-inserted > div.groupItems.groupItemsContent.openResult.ng-star-inserted > div > div > app-actions > ul > li > button").click ()
            cy.log ("click on Collect-it on outstanding invoices")
    
    
            cy.get("#ourRef").type ("inv-0049")
            cy.wait(5000)
            cy.get("#ourRef").clear ()
            cy.wait (3000)
            cy.log("Verify the search function")
    
            cy.get("#collectInvoiceList > app-list > app-table > div > div:nth-child(3) > div.field_invoiceId.flex-row.ng-star-inserted > div > input").check ()
            cy.log("Select an invoice to submit")
            cy.wait(5000)
    
            cy.get("#collectInvoiceList > div > app-button > button"). click ()
            cy.wait (5000)
            cy.log("click on the Submit-it  button")
    
            cy.get("#contactNumber") .type ("0192802939")
            cy.log("Enter phone number")
            cy.wait(5000)
    
    
            cy.get("#sendToCollectForm > form > div.formButtons > app-button:nth-child(2) > button").click ()
            cy.log("Click on the submit button")
            cy.wait(15000)
    
           return this 
     
     }

     SendNow () {

        cy.get ("#invoiceListTable > app-list > div.groupWrapper.ng-star-inserted > div.groupItems.groupItemsContent.openResult.ng-star-inserted > app-table > div > div.flex-table.row.chaseRow.rowClickable.ng-star-inserted > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li:nth-child(1) > button").click ()
        cy.wait (5000)
        cy.log ("click on the Send Now button")

        cy.get("#template").select (4) 
        cy.wait(10000)
        cy.log("Select First Overdue Reminder template")

        cy.get("#previewInvoice > button").click ()
        cy.wait(3000)
        cy.log("Click on the preview button")

        cy.get("#chase > app-invoice-list > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
        cy.wait(3000)
        cy.log("Select multiple")

        cy.get("#chase > app-invoice-list > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
        cy.wait(3000)
        cy.log("Select single")

        cy.get("#chase > app-invoice-list > app-chase-preview-dialog > app-modal > div > div > div > button > span").click() 
        cy.wait (5000)
        cy.log ("close popup")

        cy.get("#sendReminderForm > form > div.formButtons > app-button:nth-child(2) > button").click ()
        cy.wait(3000)
        cy.log("Click on the Send button")

        cy.get ("#invoiceListTable > app-list > div.groupWrapper.ng-star-inserted > div.groupItems.groupItemsContent.openResult.ng-star-inserted > app-table > div > div:nth-child(2) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li:nth-child(2) > button").click ()
        cy.wait (5000)
        cy.log ("click on the pause button")

        cy.get("#invoiceListTable > app-list > div.groupWrapper.ng-star-inserted > div:nth-child(5) > div > div > app-actions > ul > li:nth-child(1) > button").click ()
        cy.log(1000)

        cy.get("#invoiceListTable > app-list > div.groupWrapper.ng-star-inserted > div:nth-child(5) > div > div > app-actions > ul > li:nth-child(1) > button").click ()
        cy.log(1000)

       

        return this

     }

     ExpectedPayments () {

        cy.get("#invoiceListTable > app-list > div.groupWrapper.ng-star-inserted > div.groupItems.groupItemsContent.openResult.ng-star-inserted > app-table > div > div:nth-child(2) > div.field_ourRef.flex-row.ng-star-inserted > a").click ()
        cy.wait(3000)
        cy.get("#paymentsAndNotes > div.invoiceInformation > p.contactDetailsHeader").click ()
        cy.wait(3000)
        cy.log("Contact details")

        cy.get("#invoiceActions > app-button.darkGreyButton.flexButton.addEP > button").click()
        cy.log("click expected payments")
        cy.get("#invoiceNotes > app-addexpectedpayments > app-slidepanel > div.slidePanelContent > div > div.slidePanelButtons > div > app-button > button").click ()
        cy.log("Click expected payments and close the popup ")

        cy.get("#invoiceActions > app-button.darkGreyButton.flexButton.addEP > button").click()
        cy.log("click expected payments")
        cy.wait(5000)
        cy.get ("#ep_date_0").click ().type('2022-09-10')
        cy.wait(5000)
        
       cy.get("#addexpectedpaymentsForm > form > div.formButtons > app-button > button").click ()
       cy.wait(3000)
       cy.log("Click on the save button")

       return this 
     }

      Notes (note) {

        cy.get ("#invoiceActions > app-button.darkGreyButton.flexButton.addNote > button").click ()
        cy.log('Click Add notes')
        cy.wait(5000)

        cy.get("#noteType").select (2) 
        cy.wait(5000)
        cy.get('#noteContent'). type(note)
        cy.wait (5000)
        cy.log('type notes')
        
        cy.get("#addNoteForm > form > div.formButtons > app-button > button").click ()
        cy.wait(5000)
        cy.log("Click on the Save button")


      }        

     }
 
     
 export default ChaseInvoices
    
