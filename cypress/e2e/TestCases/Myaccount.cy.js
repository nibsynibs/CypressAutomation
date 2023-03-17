///<reference types ="cypress"/>

import Myaccounts from "../PageObjects/MyAccounts.cy";

describe ("My Accounts section" , function () {
    it ("Accounts and password", function () {


        cy.login ()
        const ma = new Myaccounts ()
        ma.Accounts ("account2023-106@test.com", "James", "Jones", "0236589778")
        ma.ChangePassword ("Kit@12345678","Kit@12345678","Kit@12345678")
        cy.logout()
        
    })
  
})