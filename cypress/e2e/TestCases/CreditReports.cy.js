///<reference types = "cypress"/>

import CreditReports from "../PageObjects/CheckitCreditReports.cy"

describe("Know-it Credit Reports", function () {
    it ("Credit Report purchase, repurchase and view", function (){
 
cy.login ()
const cr = new CreditReports ()
cr.CreditReport ("DARCEY QUIGLEY & CO LTD")
cr.Repurchase ("DARCEY QUIGLEY & CO LTD")
cr.ViewCreditReport ("DARCEY QUIGLEY & CO LTD")

})
})

