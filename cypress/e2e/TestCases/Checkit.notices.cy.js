/// <reference types = "cypress"/>

import CheckitNotices from "../PageObjects/CheckitNotices.cy"

describe ("check-it Notices" , function () {
    it ("notices" , function (){

        cy.login ()
        
        const nt = new CheckitNotices ()
        nt.notices ("J E LORD & CO LIMITED")
        cy.logout ()

    })




})
