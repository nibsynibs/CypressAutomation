
///<reference types ="cypress-xpath"/>

class GlobalDashboard {

  skipledger() {

    cy.on ('uncaught:exception', () => {
      return false

    })
   

    cy.xpath("//p[normalize-space()='Skip Ledger']") .should ("be.visible").and("have.text", "Skip Ledger").click ()  
    cy.wait(3000)
    cy.log("Skip Ledger")

    return this

  }

    DisableDashboardData () {

      cy.xpath('//*[normalize-space()="Connect your ledger to unlock!"]').should ("contain","Connect your ledger to unlock!")
      cy.xpath('//*[normalize-space()="Connect your ledger to unlock!"]').contains("Connect your ledger to unlock!")
      cy.wait(2000)
      cy.log("Verify all the buttons to make sure that they have the message to connect ledger when the ledger isb't connected")

      cy.xpath("//*[normalize-space ()='Submit a case!']").should ("contain" , 'Submit a case!')
      cy.xpath("//*[normalize-space ()='Submit a case!']") .contains ("Submit  case!")
      cy.wait(3000)
      cy.log("Verify message on collect-it without ledger or csv connected ")

      return this

    }

   
    ConnectQBLedger () {

      cy.xpath("//h2[normalize-space()='Dashboard']") .click ()
      cy.wait(2000)
      cy.log("Click on the goobal dashboard")

      cy.xpath("//li[@class='quickbooks']") .click ()
      cy.wait(3000)
      cy.log("Click on the QB ledger")

      
      cy.origin('https://accounts.intuit.com', () => {

      cy.get ("#iux-username-password-sign-in-user-id-input").type ("nibesh@know-it.co.uk") ;
      cy.get ("#iux-username-password-sign-in-password-input").type ("Kit@12345678") ;
      cy.wait(10000)
      cy.get("button.Button-button-7f86796:nth-child(5)") .click ()
      cy.wait(10000)
      cy.log("Enter QB username and password and click Sign in") ;

     }) ;


    cy.origin('https://appcenter.intuit.com', () => {

     cy.get('#idsDropdownTypeaheadTextField2').type ("Statement test with small data").type ('{downArrow}') .type ('{enter}')
     cy.wait(10000)

                    
      cy.get ("button.StyledButton__Wrapper-vnaxcc-1:nth-child(2)").click ()
      cy.wait(5000)
      cy.log ("Click on the next button")

      cy.get("button.StyledButton__Wrapper-vnaxcc-1:nth-child(10)").click ()
      cy.wait(10000)
      cy.log("click on the connect button")
   
       }) ;

         
      return this
        
      }

    Enabledashboarddata () {

      cy.on('uncaught:exception' , () =>{

        return false

      })

      cy.xpath("//h2[normalize-space()='Dashboard']") .click ()
      cy.wait(3000)

      cy.xpath("//div[@class='moreInfo active ng-star-inserted']").should ('not.contain' ,"Connect your ledger to unlock!") 
                                                                  . and('not.have.text',"Connect your ledger to unlock!")
                                                                  // . and ('have.text', 'More Info')
                                                                  .and('contain', 'More Info')
      cy.wait(2000)
      cy.log("Verify that the global dashboard is enabled")

      return this
      }

      Calendar () {

      cy.xpath("//span[@class='calendar']") .click ()
      cy.wait(2000)

       for (let i=1 ;i<=15 ;i++) {
       cy.xpath("//app-calendar[1]//header[1]//button[1]") .click ()
       }
       cy.xpath("/html[1]/body[1]/app-root[1]/div[2]/div[1]/app-main-dashboard[1]/div[1]/app-welcomebox[1]/div[1]/app-date-range[1]/app-modal[1]/div[1]/div[1]/div[1]/div[2]/app-calendar-range[1]/app-calendar[1]/table[1]/tbody[1]/tr[1]/td[3]/button[1]") .click ()
       cy.wait(2000)
       cy.xpath('//*[@id="dashboard"]/app-welcomebox/div/app-date-range/app-modal/div/div/div[2]/button[2]').click ()

       return this
       
         
        }

     


        }

        

      


export default GlobalDashboard











































