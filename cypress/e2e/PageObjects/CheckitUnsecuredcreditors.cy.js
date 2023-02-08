/// <reference types = "cypress"/>


class unsecuredcreditors {

    useccreditors (compname) {

        cy.checkit ()
        cy.wait(3000)
        cy.log("click on unsecured creditors")

        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })

        cy.get ("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > ul > li:nth-child(6) > a") .click ()
        cy.wait (2000)
        cy.log ("click on unsecured creditors")

        cy.get ("#companyname") .type (compname)
        cy.wait (2000)

        cy.get ("#unsecuredCreditorsListTable > app-list > app-table > div > div:nth-child(3) > div.field_companyName.flex-row.ng-star-inserted > a"). click  ()
        cy.wait (5000)
        cy.log ("click on company name")

        


        return this

    }
}

export default unsecuredcreditors