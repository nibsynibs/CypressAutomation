///<reference types = "cypress"/>

import CreditReports from "../PageObjects/CheckitCreditReports.cy"

describe("Know-it Credit Reports", function () {
    it ("Credit Report purchase, repurchase and view", function (){
 
cy.login ()
const cr = new CreditReports ()
cr.CreditReport ("Momos Ltd")
cr.Repurchase ("Momos Ltd")
cr.ViewCreditReport ("Momos Ltd")
cy.logout ()

})
})

