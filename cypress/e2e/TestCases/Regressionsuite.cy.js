///<reference types ="cypress"/>

import mycomp from "../PageObjects/Mycompanies.cy"
import GlobalDashboard from "../PageObjects/GlobDashboard.cy";
import CreditReports from "../PageObjects/CheckitCreditReports.cy"
import CheckitDashboard from "../PageObjects/Check-itDashboard.cy"
import companieshouse from "../PageObjects/CheckitCompanieshouse.cy"
import Creditmonitoring from  "../PageObjects/CheckitCreditMonitoring.cy"
import unsecuredcreditors from "../PageObjects/CheckitUnsecuredcreditors.cy"
import CheckitNotices from "../PageObjects/CheckitNotices.cy"
import ChaseDashboard from "../PageObjects/ChaseItDashboard.cy"
import ChaseInvoices  from "../PageObjects/ChaseitInvoice.cy";
import yourschedule from "../PageObjects/ChaseitYourSchedule.cy"
import chasesettings from "../PageObjects/ChaseitSettings.cy" ;
import chasetemplate from "../PageObjects/ChaseitTemplates.cy"
import  collectitCase from "../PageObjects/CollectitCases.cy"
import MyInt from "../PageObjects/Integration.cy" 
import Markeptplacepurchase from "../PageObjects/Marketplace.cy"
import Myaccounts from "../PageObjects/MyAccounts.cy";
import SusbcriptionDowngrade from "../PageObjects/FreePlan.cy"
import Userlicenseandadd from "../PageObjects/Users.cy"



describe ("Regression suite", function () {

//   cy.on ('uncaught:exception' , () => {

//     return false
//   })

//    beforeEach (function () {

//     cy.login ()
//    })

//  afterEach(function () {

//   cy.logout ()
//  })

 it ("My companies" , function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
 
  cy.login ()
  const mc = new mycomp ()
  mc.Comp ()
  mc.Verifyrowsandcolumn ()
  mc.checkcelldata ()
  mc.SelectCompany ()
  mc. Alerts ()
  mc.Row()
  mc.Companysearch ("Basket Case") 
  cy.logout ()
    


  })

      it("Credit Report purchase, repurchase and view", function (){

        cy.on ('uncaught:exception' , () => {

          return false
        })
     cy.login ()
      const cr = new CreditReports ()
      cr.CreditReport ("RAMSEY GORDON LIMITED")
      cr.Repurchase ("RAMSEY GORDON LIMITED")
      cr.ViewCreditReport ("RAMSEY GORDON LIMITED")
   
})


it ("Users" , function (){

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
    const usr = new Userlicenseandadd()
  usr.AddUserLicence ()
  usr.AddUser ("James", "Smithson","account2023-2@test.com")
    
    
})

it ("Check Dashboard" , function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const CD = new CheckitDashboard ()
  CD.Dashboard ()
  CD.CreditMonitoring ()
  CD.CreditReports ()
  CD.UnsecuredCreditors ()
  CD. GazetteNotices ()
  
 })


 it ("companies house" , function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const co = new companieshouse ()
  co.comphouse ("SALTMARSH LIMITED")
 

 })

 it (" monitoring", function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const cm = new Creditmonitoring ()
  cm.monitoring ("CITY LIMOUSINES")

})

it ("unsecured Creditors" , function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const un = new unsecuredcreditors ()
  un.useccreditors ("ZONIN UK LIMITED")

   
})

it ("notices" , function (){

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const nt = new CheckitNotices ()
  nt.notices ("J E LORD & CO LIMITED")
   
})

it (" Credit monitoring", function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  
  const cm = new Creditmonitoring ()
  cm.monitoring ("LEW PLUMBING LTD")
  cy.logout ()


})

it("chaseit dashboard", function (){

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const ch = new ChaseDashboard ()
  ch.Dashboard ()
  ch.Verifycelldata ()
  ch.Checkcelldata ()
  ch.AgedDebtor ()
  cy.logout ()
})

it("Invoices" , function (){

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const ci = new ChaseInvoices
  ci.Invoices ()
  ci.OutstandingInvoices ()
  ci.SendNow ()
  ci.ExpectedPayments ()
  ci.Notes ("Testers test note fae testing")
})

it ("Your Schedule", function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const sch = new yourschedule 
  sch.SelectLedger ()
  sch.Reminder (15,30)
  sch.InitialChase ()
  sch.Befordue (8)
  sch.Overdue1 (8)
  sch.Overdue2 (15)

})

it ("settings",function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
 
  const set = new chasesettings ()
  set.Settings ()
  //set.SelectLedger ()
  set.Letter ("pink Floyd Ltd", "1236545", "55 test avenue" , "Tester's test", "Test toon", "Test county", "TS8 6JJ")
  set.changeemailsettings
   

 })

 it("chase templates", function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
 const ct = new chasetemplate ()
  ct.EditSchedule ()
  ct.EmailTemplates ("Test template-525","Test Subject single", "Single email test message", "Test subject multi", "Multiple email test message")
  ct.LetterTemplates ("Lt temp-10")
  ct.SMSTemplates ("Sms temp-11")
 
})

it("Global Dashboard data test" , function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const gd = new GlobalDashboard ()
  gd.MainDashboard ()
  gd.Calendar ()
  gd.Checkit()
  gd.chaseit()
  gd.collectit ()
})


it ("cases" , function (){

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
 
  const cs = new collectitCase ()
  cs.cases (" BLUEJAY QUEST EXPEDITION LIMITED")

})

it ("Ledger license and add ledger", function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()

  const ld = new  MyInt () 
  ld. AddLedgerLicence ()
  ld.AddNewQBLedger ()
  // ld.AddNewXeroLedger ()
  // ld.CsvUpload ()
  
})  

it("Markeptplace credit purchase", function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const mt = new Markeptplacepurchase ()
  mt.Marketp ()
  // mt.Payment ()
})

it ("Accounts and password", function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const ma = new Myaccounts ()
  ma.Accounts ("account2023-16@test.com", "James", "Jones", "0236589778")
  ma.ChangePassword ("Kit@12345678","Kit@12345678","Kit@12345678")

  
})

it("Credit Monitoring purchase on a free plan" , function () {

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
  const su = new SusbcriptionDowngrade ()
  su.Createsubscription ()
  su.ConnectLedger ()
  su.CheckitDashboard ()
   
  
})


it ("Users" , function (){

  cy.on ('uncaught:exception' , () => {

    return false
  })
  cy.login ()
    const usr = new Userlicenseandadd()
  usr.AddUserLicence ()
  usr.AddUser ("James", "Smithson","account2023-2@test.com")
    
    
})

})






















































