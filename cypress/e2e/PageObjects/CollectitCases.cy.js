///<reference types = "cypress"/>

class collectitCase {

    cases (compname) {

        cy.on("uncaught:exception" , () => {
            return false

        })

        cy.collectit ()
        cy.wait(3000)
           
        cy.get("#container > app-navigation-bar > app-navigation-section.collect.ng-star-inserted > ul > li:nth-child(2) > a").click ()
        cy.wait (3000)
        cy.log("click on collect-it Cases")
    
        cy.get("#collectCompany\.companyName").type (compname)
        cy.wait(3000)
        cy.log("enter company name on the search")
        
        return this
    
    }
    
    }
    
    export default collectitCase