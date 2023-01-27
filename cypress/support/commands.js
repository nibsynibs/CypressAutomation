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


Cypress.Commands.add ("login", () => {
    cy.visit("https://test.know-it.co.uk")
    cy.viewport (2000,1000)
    cy.get ("#email").type ("account2023-7@test.com")
    cy.get ("#password").type('Kit@12345678')
    cy.get  ("#loginForm > form > div.formButtons > app-button > button").click ()
    cy.wait (20000)
})


Cypress.Commands.add ("logout", () => {
    cy.get ("#container > app-navigation-bar > header.noParentItem.logoutLink > h2").click()
    cy.wait (5000)
   
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







    

    
