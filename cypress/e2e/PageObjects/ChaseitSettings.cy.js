///<reference types= "cypress"/>

class chasesettings {

    Settings () {

        cy.on("uncaught:exception" , () => {

            return false

        })

        cy.get ("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > header > img").click ()
        cy.wait(2000)
        cy.log("click on Chase-it")

        cy.get("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > ul > li:nth-child(4) > a").click ()
        cy.wait(2000)
        cy.log("Click on settings")

        return this
        
    }
    
    // SelectLedger () {

    //    cy.get("#ledgerSelector").select (1)
    //    cy.wait(2000)
    //    cy.log("Select ledger")

    //    return this
    // }

    Letter (name,int,Add1,Add2,town,county,postcode) {

        cy.get ("#letterSettings > div.sectionContent > div > div:nth-child(1) > div:nth-child(1) > div > input").clear ().type (name)
        cy.log ("Enter From name")

        cy.get("#letterSettings > div.sectionContent > div > div:nth-child(1) > div:nth-child(1) > div > div > ul > li.manualOverrideCompaniesHouse > p.overrideButton") .click ()

        cy.get("#letterSettings > div.sectionContent > div > div:nth-child(1) > div.formField.companyNumber > div.limitedCompanyField > input").check ()
        cy.log("check limited company")

        cy.get("#letterSettings > div.sectionContent > div > div:nth-child(1) > div.formField.companyNumber > div.companyNumberField > input") .clear ().type (int)
        cy.log("Enter company reg")

        cy.get("#letterSettings > div.sectionContent > div > div:nth-child(2) > div:nth-child(1) > input"). clear ().type (Add1)
        cy.log("Enter address line 1")

        cy.get ("#letterSettings > div.sectionContent > div > div:nth-child(2) > div:nth-child(2) > input").clear ().type(Add2)
        cy.log("Enter address 2")

        cy.get("#letterSettings > div.sectionContent > div > div:nth-child(2) > div:nth-child(3) > input").clear ().type(town)
        cy.log("Enter town")

        cy.get("#letterSettings > div.sectionContent > div > div:nth-child(2) > div:nth-child(4) > input").clear ().type (county)
        cy.log("Enter county")

        cy.get("#letterSettings > div.sectionContent > div > div:nth-child(2) > div:nth-child(5) > input").clear ().type(postcode)
        cy.log("enter postcode")

        cy.wait (5000)

        cy.get("#saveDetailsBtn > button").click ()

    }

    changeemailsettings () {

        cy.get ("#connectO365 > div > div.o365button.ng-star-inserted > app-button > button").click ()
        cy.get("#i0116").type("nibesh@know-it.co.uk")
        cy.get("#idSIButton9").click ()
        cy.get("#i0118").type("Bertelsmann@123")
        cy.get("#idSIButton9").click()
        cy.log("Enter outlook username, password and sign in")





    }


}

export default chasesettings