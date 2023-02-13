///<reference types ="cypress"/>
import GlobalDashboard from "../PageObjects/GlobalDashboard.cy"

describe ("know-it test for global dashboard",function(){
    it('create an account',function(){

        cy.login ()

        const gd = new GlobalDashboard () ;
        gd.Dashboard ()
        // gd.Calendar ()
        gd.checkit ()
        // gd.chaseit ()
        // gd.collectit ()

        cy.logout ()
    

    })
})