///<reference types = "cypress"/>

import Creditmonitoring from  "../PageObjects/CheckitCreditMonitoring.cy"

describe ("Credit monitoring",function () {

    it (" monitoring", function () {

        cy.login ()
       
        const cm = new Creditmonitoring ()
        cm.monitoring ("LEW PLUMBING LTD")
        cy.logout ()



    })



})