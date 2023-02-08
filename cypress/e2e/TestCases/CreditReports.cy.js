///<reference types = "cypress"/>

import CreditReports from "../PageObjects/CheckitCreditReports.cy"

describe("Know-it Credit Reports", function () {
    it ("Credit Report purchase, repurchase and view", function (){
 
cy.login ()
const cr = new CreditReports ()
cr.CreditReport ("JOHNSON, JOHNSON & JOHNSON LIMITED")
cr.Repurchase ("JOHNSON, JOHNSON & JOHNSON LIMITED")
cr.ViewCreditReport ("JOHNSON, JOHNSON & JOHNSON LIMITED")
cy.logout ()

})
})

