///<reference types = "cypress"/>

class companieshouse {

    comphouse (compname) {

        cy.on("uncaught:exception" , () => {
            return false

        })

        cy.checkit ()
        cy.wait(3000)

        // cy.on('uncaught:exception', (err, runnable) => {

        //     return false
        // })

        cy.get ("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(5) > a") .click ()
        cy.wait (2000)
        cy.log ("click on companies house")

        cy.get ("#keywords") .type (compname)
        cy.wait (2000)

        cy.get ("#companiesHouseListTable > app-list > app-table > div > div:nth-child(3) > div.field_url.flex-row.ng-star-inserted > a"). click  ()
        cy.wait (5000)
        cy.log ("click on the file")


        return this


    }


}

export default companieshouse