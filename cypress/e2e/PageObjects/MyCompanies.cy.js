///<reference types ="cypress"/>

class mycomp {

    Comp () {
      cy.get ("#container > app-navigation-bar > app-navigation-section.my-companies.ng-star-inserted > header > h2") .click ()
      cy.wait (3000)
      cy.log("Click on My Companies")

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


    Companysearch (companyname) {
        cy.get ("#keywords").type(companyname)  
        cy.wait(3000)
        cy.log("Search for company name")

        return this
    }
      
    switchview (comp, ) {
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
        

