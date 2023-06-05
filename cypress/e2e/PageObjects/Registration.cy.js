class Registration {

  LogintoURL () {

    cy.visit ("https://test.know-it.co.uk/")
    cy.url().should ('eq',"https://test.know-it.co.uk/login?returnUrl=%2Fmain-dashboard" )
             .and ('contain',"login")
             .and ('include',"know-it.co.uk")
    
   cy.wait(2000)
   cy.log("Enter the url")
  }

  Createanaccount () {

    cy.on ('uncaught:exception', function () {

      return false
    
    })

    cy.xpath("//a[@class='ng-star-inserted']") .should ('be.visible')
                                               .and('contain', "Create an account") .click ()
                                                 
  cy.wait(3000)
    cy.log("Click on Create an account link")

  }

  Email (email) {

    cy.on('uncaught:exception',() => {
      return false
    })

    cy.xpath("//input[@id='email']") .type(email)
    cy.xpath("//input[@id='email']").should ('be.visible')
                                    .and('be.enabled')
                                    .and ("have.value" , "newknow-itautomationtest@test.com")
                                    
                                    

    cy.wait(3000)
    cy.log("Enter email address")

    cy.xpath("//button[@type='submit']").should ("be.visible")
                                        .and ("be.enabled")
                                        
                                        .and ("have.text", "Continue") .click ()
                                        // .and('contain', "Continue")
                                        
    cy.wait(3000)
    cy.log("Click on the continue button")
    
    }

  CompanyandUserDetail (password) {
     
    cy.on('unhandled:exception', () => {
      return false

    })

    cy.xpath("//input[@id='companynameLookup']") .type ("freeplan")
    cy.wait(3000)
    cy.xpath("//li[@class='companiesHouseResult ng-star-inserted']") .should ("have.length", 5)
    cy.xpath("//li[@class='companiesHouseResult ng-star-inserted']") .contains("FREEPLAN LTD") .click({force: true})
    cy.log("Select company from the companies house dropdown")

    cy.xpath('//*[@id="firstname"]') .type ("Nibs")
    cy.wait(3000)
    cy.xpath('//*[@id="firstname"]') . should ("be.visible")
                                         .and("have.value", "Nibs")
                                        

    cy.log("Enter first name")

    
    cy.xpath("//input[@id='lastname']") .type ("Pkh" , {force:true})
    cy.xpath("//input[@id='lastname']") . should ("be.visible")
                                         .and("have.value", "Pkh")
                                         
      
      cy.log("Enter last name")



    cy.xpath("//input[@id='password']") .type(password)
    cy.xpath("//input[@id='password']").should ("have.value" , "Kit@12345678")
                                       .and ("contain", "Kit@12345678")
  
   cy.log("Enter password")

   cy.xpath("//button[@type='submit']").should ("be.visible")
                                       .and("have.text", "continue")
                                      .and ("include","continue").click ()
cy.wait(3000)
cy.log("Click on the continue button")

    
   }

   Optionalfields () {

    cy.on ('unhandled:exception', function () {

      return false

    })

  cy.xpath("//input[@id='contactPhoneNumber']") .type("0326584558")
  cy.xpath("//div[@class='xeroService ng-star-inserted']") .check ()
  cy.xpath("//button[@type='submit']") .click ()

  }
 }

  export default Registration













































