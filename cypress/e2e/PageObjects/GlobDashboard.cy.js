///<reference types= "cypress"/>

import variables from "./GlobalVariables/Global.cy"



class  GlobalDashboard extends variables {

    MainDashboard () {

        cy.on ("uncaught:exception" , () => {

            return false
        })

        cy.xpath(GlobalDshbrd).should ('be.visible')
                                                                                      .and('have.text','Dashboard')
                                                                                      .and('contain', 'Dashboard') .click ()

        return this

    }

    Calendar () {

        cy.on ("uncaught:exception" , () => {

            return false
        })

        cy.xpath(calendaricon).should ('be.visible') .click () ;
        cy.wait(2000)
        cy.log("click on the calendar icon")
        
        for (let i=1 ; i<=14 ; i++) {
        cy.xpath(calendarprevbtn).click ()
                      
        }
      
        cy.wait(3000)

        cy.xpath(firstdayofthemonth).should("contain", "1") .click ()
        cy.wait(3000)
        cy.log("Select  the first  day of the month from the calendar")

        cy.xpath(lastdaofthemonth).click ()
        cy.log("Select the last day of the month")

        cy.xpath(calendarokbtn).click ()
        cy.wait(5000)
        cy.log("Select the dates and click ok")



        return this
      }

      Checkit () {

        //Monitoring changes
        cy.xpath(monitoringchangesmoreinfo).click ()
        cy.wait(5000)
        cy.wait("click on More info")

        
        //Normalize-space can be used in an xapth to work with the text 
       // <span _ngcontent-otv-c68="" style="" xpath="1">More Info</span> where more info is the text
       //in the following Event description is the text

        cy.xpath(monitoringchangeseventdesc).click ()
        cy.wait(3000)
        cy.log("Click on the event description")

        cy.xpath (monitoringchangescompname) .click ()
        cy.wait(3000)
        cy.log("Click on the company name description")

        cy.xpath(closepopupbutton) .click ()
        cy.wait(3000)
        cy.log("Click on the close button")

        //Company Notices-My Companies

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[1]/ul/li[2]/app-widget-tab-group/ul/li[1]/button').click ()
        cy.log("Click on My Companies")

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[1]/ul/li[2]/app-widget-tab-group/app-widget-counter[1]/div/span').click ()
        cy.wait(3000)
        cy.log("Click on More info")

        cy.xpath('//div[normalize-space() ="Company Name"]').click ()
        cy.wait(3000)
        cy.log("Click on Company Name")

        cy.xpath('//div[normalize-spacing () =""Date"]') .click ()
        cy.wait(3000)
        cy.log("Click on Date")

        cy.xpath("//div[@class='modalCloseButton']") .click ()

        //Company Notices-Rest of UK

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[1]/ul/li[2]/app-widget-tab-group/ul/li[2]/button') .click ()
        cy.wait(3000)
        cy.log("Click on Rest of the uk")

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[1]/ul/li[2]/app-widget-tab-group/app-widget-counter[2]/div/span') .click ()
        cy.wait(2000)
        cy.log("click on More Info")

        cy.xpath('//div[normalize-space() ="Date"]').click ()
        cy.wait(3000)
        cy.log("Click on Company Name")



        cy.xpath("//div[@class='modalCloseButton']") .click ()
        cy.wait(3000)
        cy.log("click on the Close button")

             //Unsecured Creditors-My Companies

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[1]/ul/li[3]/app-widget-tab-group/ul/li[1]/button').click ()
        cy.log("Click on My Companies")

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[1]/ul/li[3]/app-widget-tab-group/app-widget-counter[2]/div/span').click ()
        cy.wait(3000)
        cy.log("Click on More info")

        cy.xpath('//div[normalize-space() ="Company Name"]').click ()
        cy.wait(3000)
        cy.log("Click on Company Name")

        cy.xpath('//div[normalize-spacing () ="Statement Date"]') .click ()
        cy.wait(3000)
        cy.log("Click on Date")

        
        cy.xpath('//div[normalize-spacing () ="Amount Owed"]') .click ()
        cy.wait(3000)
        cy.log("Amount Owed")

        cy.xpath("//div[@class='modalCloseButton']") .click ()
        
        //Unsecured Creditors-Rest of UK

             cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[1]/ul/li[3]/app-widget-tab-group/ul/li[2]/button') .click ()
             cy.wait(3000)
             cy.log("Click on Rest of the uk")
     
             cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[1]/ul/li[3]/app-widget-tab-group/app-widget-counter[1]/div/span') .click ()
             cy.wait(3000)
             cy.log("click on More info")
                     
               
             cy.xpath('//div[normalize-space() ="Statement Date"]').click ()
             cy.wait(3000)
             cy.log("Click on Company Name")
     
             cy.xpath('//div[normalize-space () ="company Name"]') .click ()
             cy.wait(3000)
             cy.log("Click on Date")
     
             
             cy.xpath('//div[normalize-space () ="Amount Owed"]') .click ()
             cy.wait(3000)
             cy.log("Click on Date")
     
             cy.xpath("//div[@class='modalCloseButton']") .click ()
             cy.wait(3000)
             cy.log("click on the Close button")

        return this

      }

      chaseit(){

        //Total Aged Debtors
        
        cy.xpath("//li[@class='chase-it ng-star-inserted']//button[contains(text(),'Amount due')]") .click ()
        cy.wait(3000)
        cy.log("Click on Amount Due")

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[2]/ul/li[1]/app-widget-tab-group/app-widget-currency/div/span') .click ()
        cy.wait(3000)
        cy.log("click on More info")
                
        cy.xpath('//div[normalize-space ()="Invoice ID"]').click ()
        cy.scrollTo('bottom')   
        cy.wait(5000)
        cy.log("Click on  the outstanding invoice page")
    

        cy.xpath("//div[@class='modalCloseButton']") .click ()
        cy.wait(3000)
        cy.log("click on the Close button")

        cy.xpath("//div[normalize-space ()='Invoice count']") .click ()
        cy.wait(3000)
        cy.log("Click on Invoice count")

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[2]/ul/li[1]/app-widget-tab-group/app-widget-counter/div/span') .click ()
        cy.wait(3000)
        cy.log("click on More info")
                
     
        cy.xpath("//div[@class='modalCloseButton']") .click ()
        cy.wait(3000)
        cy.log("click on the Close button")

        //Expected Payments

        cy.xpath('//button[normalize-space()="Expected"]') .click ()
        cy.wait(3000)
        cy.log("Click on Expected")

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[2]/ul/li[2]/app-widget-tab-group/app-widget-currency[1]/div/span') .click ()
        cy.wait(3000)
        cy.log("click on More info")
                
      
        cy.xpath("//div[@class='modalCloseButton']") .click ()
        cy.wait(3000)
        cy.log("click on the Close button")

        
        //Missed Payments

        cy.xpath('//button[normalize-space()="Missed"]') .click ()
        cy.wait(3000)
        cy.log("Click on missed")

        cy.xpath("//li[@class='chase-it ng-star-inserted']//li[1]//app-widget-tab-group[1]//app-widget-currency[1]//div[1]//span[1]") .click ()
        cy.wait(3000)
        cy.log("click on More info")
                
      
        cy.xpath("//div[@class='modalCloseButton']") .click ()
        cy.wait(3000)
        cy.log("click on the Close button")

        //Payments Received

        cy.xpath('//button[normalize-space()="Missed"]') .click ()
        cy.wait(3000)
        cy.log("Click on Payments received")

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[2]/ul/li[3]/app-widget-currency/div') .click ()
        cy.wait(3000)
        cy.log("click on More info")
                
        
        cy.xpath("//div[@class='modalCloseButton']") .click ()
        cy.wait(3000)
        cy.log("click on the Close button")

           
        //Email

        cy.xpath('//button[normalize-space()="E-mail"]') .click ()
        cy.wait(3000)
        cy.log("Click on Email")

        cy.xpath('//*[@id="dashboard"]/app-widget-container/ul/li[2]/ul/li[4]/app-widget-tab-group/app-widget-counter[1]/div') .click ()
        cy.wait(3000)
        cy.log("click on More info")
                
      
        cy.xpath("//div[@class='modalCloseButton']") .click ()
        cy.wait(3000)
        cy.log("click on the Close button")

         //Letter

         cy.xpath('//button[normalize-space()="Letter"]') .click ()
         cy.wait(3000)
         cy.log("Click on Letter")
 
         cy.xpath("//li[@class='chase-it ng-star-inserted']//app-widget-counter[@class='ng-star-inserted']//span[contains(text(),'More Info')]") .click ()
         cy.wait(3000)
         cy.log("click on More info")
                 
       
         cy.xpath("//div[@class='modalCloseButton']") .click ()
         cy.wait(3000)
         cy.log("click on the Close button")

        //Sms

        cy.xpath('//button[normalize-space()="SMS"]') .click ()
        cy.wait(3000)
        cy.log("Click on sms")

        cy.xpath("//li[@class='chase-it ng-star-inserted']//app-widget-counter[@class='ng-star-inserted']//span[contains(text(),'More Info')]") .click ()
        cy.wait(3000)
        cy.log("click on More info")
                
        
        cy.xpath("//div[@class='modalCloseButton']") .click ()
        cy.wait(3000)
        cy.log("click on the Close button")

        return  this

      }



}


export default GlobalDashboard