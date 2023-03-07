///<reference types="cypress"/>

describe ("Radio buttons and checkboxes", () => {
    it("Checkboxes and radio buttons" , function () { 


//Open the url and select the radio buttons
        cy.visit ("https://itera-qa.azurewebsites.net/home/automation")

//Select the buttons and add assertions.
         cy.xpath('//*[@id="male"]').should("be.visible")
         cy.xpath('//*[@id="male"]'). check ().should ("be.checked")
         cy.xpath('//*[@id="female"]').should ("not.be.checked")

         cy.xpath('//*[@id="female"]').should ("be.visible")
         cy.xpath('//*[@id="female"]'). check (). should ("be.checked")
         cy.xpath('//*[@id="male"]'),should ("not.be.checked")

//Checkboxes to select/unselect checkboxes with assertions
    cy.xpath('//*[@id="monday"]').should ("be.visible")
    cy.xpath('//*[@id="monday"]').check().should("be.checked") 

    //Selecting multiple checkboxes
    //Create xpath with element common in all the checkboxes.
    //Instead of ('//*[@id="monday"]'), ('//*[@type ="checkbox"]'). 
    //type=checkbox is common in all the checkboxes so we can select all with just 1 cy.xpath

    cy.xpath("//input[@type='checkbox']") .check (). should("be.checked")
    cy.xpath("//input[@type='checkbox']").uncheck().should ("not.be.checked")

    //Selecting only the first and or the last checkbox
    cy.xpath("//input[@type='checkbox']") .first().check () .should ("be.checked")
    cy.xpath("//input[@type='checkbox']") .last().check () .should ("be.checked")

    //Assert the number of fields with checkboxes.
    cy.xpath("//input[@type='checkbox']") .should ('have.value', 11)
    


    




     



    })
 



})