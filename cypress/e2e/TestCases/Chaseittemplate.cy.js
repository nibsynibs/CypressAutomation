///<reference types = "cypress"/>

import chasetemplate from "../PageObjects/ChaseitTemplates.cy"

describe ("Know it Chase template", function () {
    it("chase templates", function () {

        cy.login ()
        const ct = new chasetemplate ()
        ct.EditSchedule ()
        ct.EmailTemplates ("Test template-525","Test Subject single", "Single email test message", "Test subject multi", "Multiple email test message")
        ct.LetterTemplates ("Lt temp-10")
        ct.SMSTemplates ("Sms temp-11")
      
        cy.logout ()

   
    })



})