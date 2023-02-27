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

        cy.xpath('//*[@id="archivedCreditReportsList"]/div/app-list/app-table/div/div[2]/div[2]/a') .click ().should ("be.visible")
        cy.wait(2000)
        cy.go("back")
        cy.log("Click on the company and click the back button to get to the dashboard")

        cy.xpath('//*[@id="tabs"]/div/div[2]/ul/app-tab[1]/li') .click ()
        .scrollTo ("bottom") .scrollTo ("top")
        cy.log("Summary")

        cy.xpath('//*[@id="tabs"]/div/div[2]/ul/app-tab[2]/li') .click () 
        .scrollTo ("bottom") .scrollTo ("top")
        cy.log("company profile")

        cy.xpath('//*[@id="tabs"]/div/div[2]/ul/app-tab[3]/li') .click () 
        .scrollTo ("bottom") .scrollTo ("top")
        cy.log("Ratings")

        cy.xpath('//*[@id="tabs"]/div/div[2]/ul/app-tab[4]/li') .click () 
        .scrollTo ("bottom") .scrollTo ("top")
        cy.log("financial")

        
        cy.xpath('//*[@id="tabs"]/div/div[2]/ul/app-tab[5]/li') .click () 
        .scrollTo ("bottom") .scrollTo ("top")
        cy.log("Payment behaviour")

        cy.xpath('//*[@id="tabs"]/div/div[2]/ul/app-tab[6]/li') .click () 
        .scrollTo ("bottom") .scrollTo ("top")
        cy.log("Company structure")

        
        cy.xpath('//*[@id="tabs"]/div/div[2]/ul/app-tab[7]/li') .click () 
        .scrollTo ("bottom") .scrollTo ("top")
        cy.log("Exceptional Events")

        cy.xpath('//*[@id="printCreditReport"]') .click () 
        .scrollTo ("bottom") .scrollTo ("top")
        cy.log("Exceptional Events")

        cy.xpath('//*[@id="container"]/app-navigation-bar/app-navigation-section[3]/ul/li[1]/a') .click ()
        cy.wait(3000)
        cy.log("Return back to the dashboard")

        
       cy.xpath('//*[@id="archivedCreditReportsList"]/div/app-button/button') .click ()
       .should ("contain.text" , "View all")
       .and("be.visible")
        cy.wait("2000")
        cy.go("back")


       return this
  
        }

     UnsecuredCreditors () {

        cy.xpath('//*[@id="unsecuredCreditors"]/div/app-list/app-table/div/div[2]/div[2]/a').click ()
        cy.wait(2000)
        cy.go('back')
        cy.xpath('//*[@id="unsecuredCreditors"]/div/app-button/button').click ()
        cy.wait(2000)
        cy.go('back')
        cy.log("Usecured Creditors")

        return this

     }

    GazetteNotices() {

        cy.xpath('//*[@id="recentNoticesList"]/div/app-list/app-table/div/div[2]/div[6]/app-actions/ul/li/button') .click () .scrollTo ('bottom').scrollTo ('top')
        cy.wait(2000)
        cy.xpath('//*[@id="dashboard"]/div[3]/app-recent-notices/app-slidepanel/div[2]/div/div[1]/div/app-button/button').click ()
        cy.log("close the pop up")

        cy.xpath('//*[@id="recentNoticesList"]/div/app-list/app-table/div/app-paging/button[2]').click ()
        cy.log("Click on the next button")

        cy.xpath('//*[@id="recentNoticesList"]/div/app-button/button').click ()
        cy.wait(2000)
        cy.go('back')

        return this





    }
           


    }

    export default CheckitDashboard

