///<reference types ="cypress"/>

class ResetPassword {

    Nagivate (url) {
        cy.visit (url)
        cy.wait (3000)
        cy.log ("Login to the url")
       
       return this
       }

    Password () {

        cy.get ("#signinBox > div.registerLink > ul > li:nth-child(2) > a").should ("be.visible").click ()
        cy.wait (3000)
        cy.log ("Click on Forgot Password")

        return this
    }

        Reset(email) {
            cy.get ("#email").type (email)
            cy.wait(3000)
            cy.log("Enter email address to get the reset link")

            cy.get("#forgotPasswordForm > form > div.formButtons > app-button > button").should ("be.visible").should ("be.enabled").click ()

            return this
         }
    }

    export default ResetPassword