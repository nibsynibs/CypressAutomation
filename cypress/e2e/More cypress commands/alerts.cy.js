///<reference types ="cypress"/>

describe ("Alert functioon" , function () {
      
    it ("simple alert" , () => {

        //Cypress auto handles Alerts. When any alerts get triggered, cypress  closes it automatically
        
        
        cy.visit ("http://the-internet.herokuapp.com/javascript_alerts")

        cy.xpath('//*[@id="content"]/div/ul/li[1]/button') .click ()
        
        //Validate the pop up window(verify the text in the window)
        cy.on("window:alert", function (t) {
            expect(t).to.contains('I m a JS alert')


        })

        
        it ("confirmation alerts" , () => {
          

         cy.visit ("http://the-internet.herokuapp.com/javascript_alerts")

        cy.xpath('//*[@id="content"]/div/ul/li[2]/button') .click ()
        
          //confirmation alerts(Cancel and ok button)
       
        cy.on("window.cofirm", (t) =>  {
            expect(t).to.contains('I m a JS alert')

    })

    //to click on the cancel button.
    cy.on('window.confirm', () => false)

    })


    it ("promted alrealerts" , () => {

        cy.visit ("http://the-internet.herokuapp.com/javascript_alerts")

       cy.xpath('//*[@id="content"]/div/ul/li[2]/button') .click ()
       
      //handling pop up where you have to pass text in the input box and click ok or cancel
    // Event will have to be triggered before opening the pop up cause cypress will auto close it.
    // We will have to trigger the text before opening the pop up window
      
  cy.window ().then((win)=> {
    cy.stub(win,'prompt').returns('welcome')

  })

  // if you wanna enter text and press the cancel button, execute the following
  cy.on('window.confirm', () => false)

  cy.get('//*[@id="content"]/div/ul/li[3]/button').click ()
  //Cypress willautomatically close the prompted alert.

  // if you wanna enter text and press the cancel button, execute the following

   })

   it ("authenticated alerts" , () => {

    cy.visit ("http://the-internet.herokuapp.com/basic auth",{auth:{username:"admin",password:"admin"}})

   cy.xpath('//*[@id="content"]/div/ul/li[2]/button') .click ()





})  

})

})