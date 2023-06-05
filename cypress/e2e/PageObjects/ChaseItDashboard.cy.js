///<reference types = "cypress"/>

class ChaseDashboard {

    Dashboard () {

        cy.on('uncaught:exception',() =>{

            return false

        })

        cy.get ("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > header > img").click ()
        cy.log("Click on the chase it")
        cy.wait(4000)


        cy.xpath('//*[@id="container"]/app-navigation-bar/app-navigation-section[4]/ul/li[1]/a').click ()
                
        cy.log("click on the dashboard")
        cy.wait(20000)
      

        return this 
    }

    Verifycelldata () {

        cy.on('uncaught:exception' ,() => {
            return false

        })
    
        cy.xpath('//div[@role="rowgroup"]') .should ('have.length' , '21')
        cy.log("Total number of rows")



        return this

    }

    Checkcelldata () {

        cy.xpath('//*[@id="agedDebtorsList"]/div/app-list/app-table/div/div[2]').contains ("£22,074.88")
        cy.log("Verify that value in a specific row")

        //Read all the data  from the rows and columns

        cy.xpath('//div[@role="table"]') . each (($row,index,$rows) => {
        cy.log($row.text ()) ;

        cy.wrap($row) .within ( () => {
        cy.xpath('//div[@role ="cell"]') . each ( ($col, index,$cols) =>{
        cy.log($col.text())


            })


        })


       })

     return this

    }
   

    AgedDebtor () {

        cy.on('uncaught:exception',() =>{

            return false


        })
        cy.xpath('//*[@id="agedDebtorsList"]/div/app-list/app-table/div/div[7]/div[9]/app-actions/ul/li/button').click ()
        cy.wait(10000)
        cy.log ("click on Collect-it  Aged Debtor")

    

        cy.xpath("//button[normalize-space()='Confirm']").click ()
        cy.wait(5000)
        cy.log ("Click confirm on the pop up")
                 
     

        cy.get("#collectInvoiceList > app-list > app-table > div > div.flex-table.header > div.flex-row.headerInvoiceid.ng-star-inserted > input") .check()
        cy.wait(10000)
        cy.log("check select all")

        cy.get("#collectInvoiceList > div > app-button > button"). click ()
        cy.wait (5000)
        cy.log("click submit-it")

        cy.get ("#backButton > button") .click ()
        cy.wait (5000)
        cy.log("click on the cancel button")

        cy.get ("#dashboard > div:nth-child(4) > app-aged-debtors-list > app-modal > div > div > div").click ()
        cy.log("Cross the pop up")
        cy.wait(10000)

        cy.xpath('//*[@id="agedDebtorsList"]/div/app-list/app-table/div/div[7]/div[9]/app-actions/ul/li/button').click ()
        cy.wait(10000)
        cy.log ("click on Collect-it  Aged Debtor")


        // cy.get("#ourRef").type ("inv-001-0")
        // cy.wait(10000)
        // cy.get("#chase > app-invoice-list > app-modal > div > div > div").click ()
       

        cy.get("#collectInvoiceList > app-list > app-table > div > div.flex-table.row.knowitRow.list-bottom-margin.ng-star-inserted > div.field_invoiceId.flex-row.ng-star-inserted > div > input").check ()
        cy.wait(10000)
        cy.log("Seelct an invoice to submit")
        

        cy.get("#collectInvoiceList > div > app-button > button"). click ()
        cy.wait (5000)
        cy.log("click on submit")

        cy.get("#contactNumber") .type ("0192802939")
        cy.log("Enter phone number")
        cy.wait(10000)

        cy.get("#sendToCollectForm > form > div.formButtons > app-button:nth-child(2) > button").click ()
        cy.log("Click on the submit button")
        cy.wait(25000)

        cy.xpath('/html/body/app-root/app-quote-sent-notification/div/app-modal/div/div/div[1]').should('be.visible') .click ()
        cy.log('Cross the confirmation pop up')

       return this 
 
 }

}

export default ChaseDashboard