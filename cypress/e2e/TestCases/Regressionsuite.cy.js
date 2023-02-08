///<reference types ="cypress"/>

import Userlicenseandadd from "../PageObjects/Users.cy"
import ChaseDashboard from "../PageObjects/ChaseItDashboard.cy"
import ChaseInvoices  from "../PageObjects/ChaseitInvoice.cy"
import chasesettings from "../PageObjects/ChaseitSettings.cy" 
import chasetemplate from "../PageObjects/ChaseitTemplates.cy"
import yourschedule from "../PageObjects/ChaseitYourSchedule" 
import Creditmonitoring from  "../PageObjects/CheckitCreditMonitoring.cy"
import CheckitNotices from "../PageObjects/CheckitNotices.cy"
import unsecuredcreditors from "../PageObjects/CheckitUnsecuredcreditors.cy"
import companieshouse from "../PageObjects/CheckitCompanieshouse.cy"
import  collectitCase from "../PageObjects/CollectitCases.cy"
import CreditReports from "../PageObjects/CheckitCreditReports.cy"
import Myaccounts from "../PageObjects/MyAccounts.cy"
import mycomp from "../PageObjects/Mycompanies.cy"
import MyInt from "../PageObjects/MyIntegration" 

describe ("Regression suite", function () {

   beforeEach (function () {

    cy.login ()
   })

 afterEach (function () {

  cy.logout ()
 })

  it ("User license and Add user" , function () {

    const usr = new Userlicenseandadd()
    usr.AddUserLicence ()
    usr.AddUser ("James", "Smithson","account2023-2@test.com")


  })

  it ("Credit Report purchase, repurchase and view", function (){
 
    const cr = new CreditReports ()
    cr.CreditReport ("JOHNSON, JOHNSON & JOHNSON LIMITED")
    cr.Repurchase ("JOHNSON, JOHNSON & JOHNSON LIMITED")
    cr.ViewCreditReport ("JOHNSON, JOHNSON & JOHNSON LIMITED")
    
    
    })

  it ("chaseit dashboard", function (){

    const ch = new ChaseDashboard ()
    ch.Dashboard ()
    ch.AgedDebtor ()
   
})

it ("Invoices" , function (){
  
  const ci = new ChaseInvoices
  ci.Invoices ()
  ci.OutstandingInvoices ()
  ci.SendNow ()
  ci.ExpectedPayments ()
  ci.Notes ("Testers test note fae testing")
  
 })

 it ("settings",function () {
   
  const set = new chasesettings ()
  set.Settings ()
 //  set.SelectLedger ()
  set.Letter ("pink Floyd Ltd", "1236545", "55 test avenue" , "Tester's test", "Test toon", "Test county", "TS8 6JJ")
  set.changeemailsettings
  cy.logout () 

 })

 it("chase templates", function () {
   
  const ct = new chasetemplate ()
  ct.EditSchedule ()
  ct.EmailTemplates ("Test template-525","Test Subject single", "Single email test message", "Test subject multi", "Multiple email test message")
  ct.LetterTemplates ("Lt temp-10")
  ct.SMSTemplates ("Sms temp-11")

})

it("chase templates", function () {
   
  const ct = new chasetemplate ()
  ct.EditSchedule ()
  ct.EmailTemplates ("Test template-525","Test Subject single", "Single email test message", "Test subject multi", "Multiple email test message")
  ct.LetterTemplates ("Lt temp-10")
  ct.SMSTemplates ("Sms temp-11")

   

})

it ("Your Schedule", function () {
 
  const sch = new yourschedule 
  sch.SelectLedger ()
  sch.Reminder (15,30)
  sch.InitialChase ()
  sch.Befordue (8)
  sch.Overdue1 (8)
  sch.Overdue2 (15)
   
})

it (" Credit monitoring", function () {
  
  const cm = new Creditmonitoring ()
  cm.monitoring ("LEW PLUMBING LTD")
  cy.logout ()


})

it ("notices" , function (){
  
  const nt = new CheckitNotices ()
  nt.notices ("J E LORD & CO LIMITED")
  cy.logout ()

})

it ("unsecured Creditors" , function () {
 
  const un = new unsecuredcreditors ()
  un.useccreditors ("ZONIN UK LIMITED")

})

it ("companies house" , function () {

  const co = new companieshouse ()
  co.comphouse ("SALTMARSH LIMITED")

})

it ("Collect-it cases" , function (){

  const cs = new collectitCase ()
  cs.cases (" DIISR - Small Business Services")
  
  })

  it ("Accounts and password", function () {
 
    const ma = new Myaccounts ()
    ma.Accounts ("account2023-16@test.com", "James", "Jones", "0236589778")
    ma.ChangePassword ("Kit@12345678","Kit@12345678","Kit@12345678")
    
})

it ("My companies" , function () {
 
  const mc = new mycomp ()
  mc.Comp ()
  mc.SelectCompany ()
  mc. Alerts ()
  mc.Row()
  mc.Companysearch ("Basket Case") 
  mc.switchview ("Ridgeway University")
  

})

it ("Ledger license and add ledger", function () {

  const ld = new  MyInt () 
  ld. AddLedgerLicence ()
  ld.AddNewQBLedger ()
  // ld.AddNewXeroLedger ()
  
})  









})










  

  




















 

