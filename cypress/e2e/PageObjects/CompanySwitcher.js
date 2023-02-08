//<reference types ="cypress"/>

class companyswitcher {

   
    switcher () {

        cy.get ("#companySwitcher") .click ()
        cy.wait (5000)
        cy.log("click on the company switcher")

        cy.get ("#createIcon") .click ()
        cy.wait (5000)
        cy.log("click on the create subscription icon")

        cy.get ('#creditsIcon').click ()
        cy.wait (5000)
        cy.log("click on the credits icon")

        cy.get ('#notificationsIcon') .click ()
        cy.wait (3000)
        cy.log("click on the notifications icon")

        cy.get ('#helpIcon').click ()
        cy.wait (3000)
        cy.log ("click on the help icon ")

        return this

    }

    }

export default companyswitcher