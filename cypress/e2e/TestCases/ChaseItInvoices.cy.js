///<reference types ="cypress"/>

import ChaseInvoices  from "../PageObjects/ChaseitInvoice.cy";

describe ("Know-it chase-it invoices", function () {
   it ("Invoices" , function (){

    cy.login ()
    const ci = new ChaseInvoices
    ci.Invoices ()
    ci.OutstandingInvoices ()
    ci.SendNow ()
    ci.ExpectedPayments ()
    ci.Notes ("Testers test note fae testing")
    cy.logout ()
    




   })


})