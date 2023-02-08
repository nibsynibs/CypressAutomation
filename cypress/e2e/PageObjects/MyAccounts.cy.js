///<reference types = "cypress"/>

class Myaccounts {

    Accounts (email,fname, lname,phno ) {


      cy.on('uncaught:exception', (err, runnable) => {

        return false
    })

        cy.get ("#container > app-navigation-bar > app-navigation-section.my-account.ng-star-inserted > header").click ()
        cy.wait (2000)
        cy.log ("My Account")

        cy.get ("#container > app-navigation-bar > app-navigation-section.my-account.ng-star-inserted > ul > li:nth-child(1) > a").click ()
        cy.wait (2000)
        cy.log ("Account details")

        cy.get ("#email"). clear ().type (email)
        cy.wait (2000)
        cy.log ("Email")

        cy.get ("#firstname").clear ().type(fname)
        cy.wait (2000)
        cy.log ("first name")

        cy.get ("#lastname").clear ().type (lname)
        cy.wait (2000)
        cy.log ("last name")

        cy.get ("#phoneNumber").clear ().type (phno)
        cy.wait (2000)
        cy.log ("phone number")

        cy.get ("#language").select (2)
        cy.wait (2000)
        cy.log ("language")

        cy.get ("#timezone").select (1)
        cy.wait (2000)
        cy.log ("time zone")

        cy.get ("#accountDetailsForm > form > div.formButtons > app-button > button").click ()
        cy.wait (2000)
        cy.log ("save")

        return this
    }


  ChangePassword (extpswd, newpass, confirmpass) {

    cy.get ("#container > app-navigation-bar > app-navigation-section.my-account.ng-star-inserted > ul > li:nth-child(2) > a").click ()
    cy.wait (8000)
    cy.log ("change password")

    cy.get ("#existingPassword").type (extpswd )
    cy.wait (2000)
    cy.log ("current password")

    cy.get ("#newpass").type(newpass)
    cy.wait (2000)
    cy.log ("new password")

    cy.get ("#confirmpass").type(confirmpass)
    cy.wait (2000)
    cy.log ("confirm password")

    cy.get("#changepassForm > form > div.formButtons > app-button > button").click ()
    cy.wait (2000)
    cy.log ("save")

    return this


  }

}

export default Myaccounts