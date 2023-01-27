///<reference types ="cypress"/>

import yourschedule from "../PageObjects/ChaseitYourSchedule" ;

describe ("Chase-it Your Schedule", function (){

    it ("Your Schedule", function () {

        cy.login()
        const sch = new yourschedule 
        sch.SelectLedger ()
        sch.Reminder (15,30)
        sch.InitialChase ()
        sch.Befordue (8)
        sch.Overdue1 (8)
        sch.Overdue2 (15)
        cy.logout ()


    })

})