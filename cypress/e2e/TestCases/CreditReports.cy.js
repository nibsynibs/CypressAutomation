///<reference types = "cypress"/>

import CreditReports from "../PageObjects/CheckitCreditReports.cy"

describe("Know-it Credit Reports", function () {
    it ("Credit Report purchase, repurchase and view", function (){
 
cy.login ()
const cr = new CreditReports ()
cr.CreditReport ("NEPAL LIMITED")
cr.Repurchase ("NEPAL LIMITED")
cr.ViewCreditReport ("NEPAL LIMITED")

})
})

