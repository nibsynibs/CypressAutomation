class Registration {

   logintoURL (){

    cy.visit ("https://test.know-it.co.uk/")
    cy.url().should("contain", "know-it")



   }

    UserReg(fname,lname, email, password) {

      cy.xpath('//*[@id="signinBox"]/div[3]/ul/li[1]/a') .click ()
      cy.xpath ('//*[@id="firstname"]').type (fname)
      cy.xpath ('//*[@id="firstname"]').should ("have.value" , fname)
      .and("be.visible")
      cy.log("Enter First name")

      cy.xpath('//*[@id="lastname"]').type (lname) 
      cy.xpath('//*[@id="lastname"]').should("have.value", lname)
      .and("be.visible")
      .and("not.contain" ,"firstname")
      cy.log("Enter last name")

      cy.xpath('//*[@id="email"]').type(email)
      cy.xpath('//*[@id="email"]').should ("have.value" , email)
      .and("be.visible")
      
      cy.log("Enter email address")

      cy.xpath ('//*[@id="password"]') .type (password) .should ("have.value" , password)
      .and("be.visible")
      cy.log("Enter password")
      


      cy.xpath ('//*[@id="registerForm"]/form/div[1]/app-checkbox/div/label/span') .click()
       .should ("be.visible")
      cy.log("Click on the checkbox")
      
     cy.xpath('//*[@id="registerForm"]/form/div[2]/app-button/button') .click ()
     .should ("be.visible")
     .and ("contain.text" , "Create Account")

     return this

    }
}

export default Registration
     











       
         



    






