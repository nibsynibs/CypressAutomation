///<reference types = "cypress"/>

import unsecuredcreditors from "../PageObjects/CheckitUnsecuredcreditors.cy"

describe (" Check-it Unsecured Credtiors" , function () {

    it ("unsecured Creditors" , function () {

        cy.login ()
        const un = new unsecuredcreditors ()
        un.useccreditors ("ZONIN UK LIMITED")

    })


})
