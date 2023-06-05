// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types ="cypress-xpath"/>
///<reference types = "cypress"/>


Cypress.Commands.add ("login", () => {
    cy.visit("https://test.know-it.co.uk")
    cy.viewport (3000,1500)
    cy.get ("#email").type ("newautomationtest@test.com")
    cy.get ("#password").type('Kit@12345678')
    cy.get  ("#loginForm > form > div.formButtons > app-button > button").click ()
    cy.wait (10000)
})


Cypress.Commands.add ("logout", () => {
    cy.get ("#container > app-navigation-bar > header.noParentItem.logoutLink > h2").click()
    cy.wait (10000)
   
})

Cypress.Commands.add ("checkit",()=> {
   cy.get ("#container > app-navigation-bar > app-navigation-section.check.ng-star-inserted > header > img"). click ()
   cy.wait (5000)
   cy.log("Click on check-it")

})

Cypress.Commands.add ("chaseit",()=>{
    cy.get ("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > header > img").click ()
    cy.wait(3000)
    cy.log("Click on chase it")


})

Cypress.Commands.add ("collectit" , () =>{
    cy.get('#container > app-navigation-bar > app-navigation-section.collect.ng-star-inserted > header > img') . should ('be.visible').click ()
    
    cy.wait(3000)
    cy.log("Click on collect-it")


})

 






    

    
