///<reference types ="cypress"/> 

class GlobalDashboard {

    Dashboard () {
    cy.get ("#container > app-navigation-bar > app-navigation-section.main-dashboard.ng-star-inserted > header").click ()
    cy.log("click on the global dashboard")
    
    return this
    
    }
    
      Calendar () {

        cy.on("uncaught:exception" , function () {

            return false

        })
    
        cy.get ("#dashboard > app-welcomebox > div > app-date-range > button > div.edit.ng-star-inserted > span") .click ()
        cy.wait(3000)
        cy.log("click on the calendar")
    
        for(let i=0 ; i<= 12 ; i++){
        cy.get ("#dashboard > app-welcomebox > div > app-date-range > app-modal > div > div > div.modal-content > div.date-selection > app-calendar-range > app-calendar:nth-child(1) > header > button:nth-child(1)").click()
        }
        cy.wait(5000)
        cy.log("Click to go back in the calendar")
        
        
        cy.get("#dashboard > app-welcomebox > div > app-date-range > app-modal > div > div > div.modal-content > div.date-selection > app-calendar-range > app-calendar:nth-child(1) > table > tbody > tr:nth-child(1) > td.selected.first-selected.inside-calendar-month.end-of-week.start-of-month.ng-star-inserted > button").click ({ force: true })
        cy.log("Select a start date")
        cy.wait(5000)
       
        cy.get("#dashboard > app-welcomebox > div > app-date-range > app-modal > div > div > div.modal-content > div.date-selection > app-calendar-range > app-calendar:nth-child(2) > table > tbody > tr:nth-child(5) > td.selected.last-selected.inside-calendar-month.end-of-month.ng-star-inserted > button").click ({ force: true })
        cy.wait(5000)
        cy.log("Select End Date")
    
        cy.get ("#dashboard > app-welcomebox > div > app-date-range > app-modal > div > div > div.modal-footer > button:nth-child(2)").click ()
        cy.log("Click ok")
    
        return this
      }
    
      checkit () {
        cy.get("#dashboard > app-widget-container > ul > li.check-it.ng-star-inserted > ul > li:nth-child(2) > app-widget-tab-group > ul > li.ng-star-inserted.active.first > button").click()
        cy.wait (3000)
        cy.log("click on the my companies tab")
        
        cy.get ("#dashboard > app-widget-container > ul > li.check-it.ng-star-inserted > ul > li:nth-child(2) > app-widget-tab-group > ul > li.ng-star-inserted.active > button").click ()
        cy.wait (5000)
        cy.log("click on the Rest of Uk tab")
    
        cy.get("#dashboard > app-widget-container > ul > li.check-it.ng-star-inserted > ul > li:nth-child(3) > app-widget-tab-group > ul > li.ng-star-inserted.active.first > button").click()
        cy.wait(3000)
        cy.log("Click on My Companies tab")
    
        cy.get("#dashboard > app-widget-container > ul > li.check-it.ng-star-inserted > ul > li:nth-child(3) > app-widget-tab-group > ul > li.ng-star-inserted.active > button") .click();
        cy.wait(3000)
        cy.log("Click on Rest of UK tab")
    
        return this
    
        }
    
    chaseit () {
       cy.get("#dashboard > app-widget-container > ul > li.chase-it.ng-star-inserted > ul > li:nth-child(1) > app-widget-tab-group > ul > li.ng-star-inserted.active.first > button").click ()
       cy.wait (3000)
       cy.log("click on the amount due tab")
    
       cy.get("#dashboard > app-widget-container > ul > li.chase-it.ng-star-inserted > ul > li:nth-child(1) > app-widget-tab-group > ul > li:nth-child(2) > button").click ()
       cy.wait (3000)
       cy.log("click on invoice count tab")
    
       cy.get ("#dashboard > app-widget-container > ul > li.chase-it.ng-star-inserted > ul > li:nth-child(2) > app-widget-tab-group > ul > li.active.first.ng-star-inserted > button").click()
       cy.wait (3000)
       cy.log("click on the expected payment tab")
    
       cy.get ("#dashboard > app-widget-container > ul > li.chase-it.ng-star-inserted > ul > li:nth-child(2) > app-widget-tab-group > ul > li:nth-child(2) > button").click ()
       cy.wait(3000)
       cy.log("Click on the missed payment tab")
    
       cy.get("#dashboard > app-widget-container > ul > li.chase-it.ng-star-inserted > ul > li:nth-child(4) > app-widget-tab-group > ul > li.active.first.ng-star-inserted > button").click ()
       cy.wait(3000)
       cy.log("click on the email tab")
    
       cy.get("#dashboard > app-widget-container > ul > li.chase-it.ng-star-inserted > ul > li:nth-child(4) > app-widget-tab-group > ul > li:nth-child(2) > button").click()
       cy.wait (3000)
       cy.log("Click on the SMS tab")
    
       return this 
    }
    
    collectit() {
      
        cy.get("#dashboard > app-widget-container > ul > li.collect-it.ng-star-inserted > ul > li:nth-child(1) > app-widget-tab-group > ul > li.active.first.ng-star-inserted > button").click ()
        cy.wait(3000)
        cy.log("click on the amount due tab")
    
        cy.get ("#dashboard > app-widget-container > ul > li.collect-it.ng-star-inserted > ul > li:nth-child(1) > app-widget-tab-group > ul > li:nth-child(2) > button").click()
        cy.wait(3000)
        cy.log("click on Case count")
    
        return this 
    
    }
       
        
    }
    
    export default GlobalDashboard
    
    