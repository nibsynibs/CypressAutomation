///<reference types = "cypress"/>

import CreditReports from "../PageObjects/CheckitCreditReports.cy"

describe("Know-it Credit Reports", function () {
    it ("Credit Report purchase, repurchase and view", function (){
 
cy.login ()
const cr = new CreditReports ()
cr.CreditReport ("TWININGS BIDCO LIMITED")
cr.Repurchase ("TWININGS BIDCO LIMITED")
cr.ViewCreditReport ("TWININGS BIDCO LIMITED")
cy.logout ()

})
})

