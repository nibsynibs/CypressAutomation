class CheckitDashboard {

    Dashboard () {

        cy.checkit ()
        cy.xpath('//*[@id="container"]/app-navigation-bar/app-navigation-section[3]/ul/li[1]/a') .click () 
        .should ("be.visible")
        .and("contain.text","Dashboard")
        .and("be.visible")
        cy.wait(3000)
        cy.log("Click on Check-it Dashboard")

        return this
    }

         CreditMonitoring () {

        cy.xpath('//*[@id="creditReportMonitoringList"]/div/app-list/app-table/div/div[3]/div[3]/a') .click ()
        .should ("contain" , "NJM Creative LTD")
        .and("be.visible")
        .and("have.value" , "NJM Creative Ltd")
        cy.wait(2000)
        cy.go ("back")
        cy.log("Click on the company name NJM Creative Ltd and go back to the Dashboard")

       cy.xpath('//*[@id="creditReportMonitoringList"]/div/app-list/app-table/div/div[3]/div[5]/app-actions/ul/li[2]/app-button/button') .click ()
       .should ("be.visible")
       .and ("have.value" , "Use Credits")
       .and("contain.text" , "Use Credits")
       cy.wait(5000)
       cy.go("back")
       cy.log("Click on buy credits and then go back to the Dashboard")

       cy.xpath('//*[@id="creditReportMonitoringList"]/div/app-button/button') .click ()
       .should ("contain.text" , "View all")
       .and("be.visible")
        cy.wait("2000")
        cy.go("back")

        return this

}

        CreditReports() {

        cy.xpath('//*[@id="archivedCreditReportsList"]/div/app-list/app-table/div/div[2]/div[2]/a')

        




        }
        


        

        


    }


