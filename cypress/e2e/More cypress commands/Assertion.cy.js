///<reference types = "Cypress"/>

describe ("more cypress commands" , function () {

    it("Assertions" , () => {

        cy.visit("https://test.know-it.co.uk/login?returnUrl=%2Fmain-dashboard") ;

        //Assert Url
        cy.url().should ('include',"know-it.co.uk" ) 
                .and  ('eq', "https://test.know-it.co.uk/login?returnUrl=%2Fmain-dashboard") 
                .and ('contain',"know-it")

        //Assert the actual login
        cy.get ("#email").type ("account2023-17@test.com")
        cy.get("#email").should ('have.value' ,"account2023-17@test.com")
        cy.get ("#password").type('Kit@12345678')
        cy.get ("#password") . should ('have.value' , 'Kit@12345678')
        cy.get  ("#loginForm > form > div.formButtons > app-button > button").should('be.visible') .click () 
       


        //Assert Page title
        cy.title ().should ('include' , 'Know-it')
                   .and('eq' , "Know-it - Dashboard")
                   .and('contain' , 'Dashboard')

        
        //Assert logo 
        cy.xpath('//*[@id="container"]/app-navigation-bar/header[1]/img'). should ('be.visible')
                                                                         . and    ('exist')

        cy.xpath('//*[@id="breadcrumbsBox"]/ul') .should ('have.length' , 1)

        //Assert the name of the user using assert function
        //Here, asserting the name of the user logged in.

        let expName ="HD" ;

        cy.get("#userIconText") .then ((x) => {

        let actname = x.text ()
        assert.notequal(expName,actname)

        cy.logout()


        })


     })

 

})

//*[@id="typeahead-suggestions"]/div/a[3]/div[1]/h3