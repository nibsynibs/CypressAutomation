///<reference types ="cypress"/>

class mycomp {

    Comp () {
      cy.get ("#container > app-navigation-bar > app-navigation-section.my-companies.ng-star-inserted > header > h2") .click ()
      cy.wait (3000)
      cy.log("Click on My Companies")

      return this

    }

 Verifyrowsandcolumn () {
 cy.xpath('//div[@class="flex-table row knowitRow rowClickable ng-star-inserted"]') .should ('have.length', '20')
 cy.log("Count the total number of rows.")

 cy.xpath('//div[@role="columnheader"]') .should ('have.length', '9')
 cy.log("count the nimber of columns")

 return this

    }

    checkcelldata (){

    //check cell data from specific row or column
    cy.xpath('//*[@id="myCompaniesList"]/app-list/app-table/div/div[6]/div[3]').contains ('11226650')

    //Read all the rows and column data

    cy.xpath('//div[@role="table"]')
     .each( ($row, index, $rows) => {

        cy.wrap($row).within( () => {
            cy.xpath('//div[@class="flex-table row knowitRow rowClickable ng-star-inserted"]').each(($col,index,$cols) => {
                cy.log($col.text()) ;


            })


        })

     })

    return this



    }



    SelectCompany () {
        cy.get("#myCompaniesList > app-list > app-table > div > div:nth-child(3) > div.field_ledgerCompanyName.flex-row.ng-star-inserted > a").click ()
        cy.wait(5000)
        cy.log("Click on the company name")
        cy.wait(3000)
        cy.go ("back")

        return this
    }

    Row () {

        cy.get ("#myCompaniesList > app-list > app-table > div > div.listFilters.ng-star-inserted > app-row-selector > div > select"). select ("10")
        cy.wait(3000)
        cy.log("select 10 rows")
        
        cy.get ("#myCompaniesList > app-list > app-table > div > div.listFilters.ng-star-inserted > app-row-selector > div > select"). select ("20")
        cy.wait (2000)
        cy.log ("select 20")

        return this

    }

    Alerts () {

        cy.get("#myCompaniesList > app-list > app-table > div > div:nth-child(3) > div.field_hasValidationIssues.flex-row.ng-star-inserted > div > span") .click ()
        cy.wait(2000)
        cy.log("click on issues")

        cy.get("#myCompaniesList > app-list > app-modal.modal-centre.width-unset.height-auto.validationModal.ng-star-inserted > div > div > app-list > app-table > div > div:nth-child(2) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li > button").click ()
        cy.get("#myCompaniesList > app-list > app-modal.modal-centre.width-unset.height-auto.validationModal.ng-star-inserted > div > div > app-list > app-table > div > div:nth-child(3) > div.field_actions.flex-row.ng-star-inserted > app-actions > ul > li > button").click ()
        cy.get("#myCompaniesList > app-list > app-modal.modal-centre.width-unset.height-auto.validationModal.ng-star-inserted > div > div > div") .click ()
    }


    Companysearch (companyname) {
        cy.get ("#keywords").type(companyname)  
        cy.wait(3000)
        cy.log("Search for company name")

        return this
    }
      
    switchview (comp) {
        cy.get ("#myCompaniesList > app-list > div.listToggle.ng-star-inserted > ul > li.gridMode.ng-star-inserted").click ()
        cy.wait(3000)
        cy.log("click on the companies grid view tab ")

        cy.get("#gridSortOptions").select (2)
        cy.wait(3000)
        cy.get("#gridSortOptions").select (4)
        cy.wait(3000)

        cy.get ("#keywords").type (comp)
        cy.wait(4000)

        return this

   }

    }

    export default mycomp
        

