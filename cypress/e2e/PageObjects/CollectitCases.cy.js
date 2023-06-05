///<reference types = "cypress"/>

class collectitCase {

    cases (compname) {

        cy.on("uncaught:exception" , () => {
            return false

        })

        cy.collectit ()
        cy.wait(10000)

        cy.xpath('//a[normalize-space()="Quotes"]').click ()
        cy.wait (4000)
        cy.log("click on Quotes")

        cy.xpath("//input[@id ='debtorName']").type (compname)
        cy.wait(10000)
        cy.log("enter company name on the search")
        
           
        cy.get("#container > app-navigation-bar > app-navigation-section.collect.ng-star-inserted > ul > li:nth-child(2) > a").click ()
        cy.wait (3000)
        cy.log("click on collect-it Cases")
    
  
        return this
    
    }
    
    }
    
    export default collectitCase