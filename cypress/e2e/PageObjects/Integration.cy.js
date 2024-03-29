///<reference types = "cypress-xpath"/> 

class MyInt {

    AddLedgerLicence () {

      cy.on('uncaught:exception', function () {

        return false


      })

        cy. get ("#container > app-navigation-bar > app-navigation-section.my-integrations.ng-star-inserted > header > h2") .click () ;
        cy. wait (3000) ;
        cy. log ("Click on My integrations tab") ;

        cy.get ("#integrationSectionHeader > div.buttons > app-button:nth-child(1) > button") .click ()
        cy. wait (3000) ;
        cy. log ("Click on My Add Licences button") ;

         cy.get ("#productList > section.account > div.products > div:nth-child(2) > div.product-box-right > div.product-box-right_bottom > button") .click () ;
         cy. wait (3000) ;
         cy. log (" cLick Add to Basket for ledgers to add additional ledgers") ;


         cy.get ("#productList > div > div > button"). click ()
         cy.wait(10000)
         cy.log ("Click checkout")

         for(let i = 0 ; i<10 ; i++) {
         cy.get ("#basketItems > tbody.basket-items > tr > td.center.qtyControls.ng-star-inserted > span.increaseQty") .click () 
         }
         cy.wait (3000)
         cy.log("Add the quantity x 9")

        cy.get("#basketBox > app-button > button") .click ()
        cy.wait(10000)
        cy.log ("Click Checkout")


        return this 

    }



    AddNewQBLedger () {

    cy.on("uncaught:exception" , () => {
      return false

    })

    cy. xpath ('//*[@id="container"]/app-navigation-bar/app-navigation-section[9]/header/h2') .click () ;
    cy. wait (3000) ;
    cy. log ("Click on My integrations tab") ;

    cy.get("#integrationSectionHeader > div.buttons > app-button.ng-star-inserted > button").click () ;
    cy.wait(10000) ;
    cy.log ("click on Add Ledger") ;

    cy.get("#connectLedgerModal > div > div > div.accountsOptions > ul > li.quickbooks > img").click () ;
    cy.wait(10000)
    cy.log ("connect quickbooks ledger") ; 

    cy.origin('https://accounts.intuit.com', () => {

    cy.get ("#iux-username-password-sign-in-user-id-input").type ("nibesh@know-it.co.uk") ;
    cy.get ("#iux-username-password-sign-in-password-input").type ("Kit@12345678") ;
    cy.wait(10000)
    cy.get("#ius-sign-in-widget > div > div > div.Bookends__NonStyledDiv-sc-163uul4-4.jdWbPG > div.styledComponents__StyledWidgetContainer-sc-12vb80e-14.lcEcRk.ius > div.UsernamePasswordSignIn__StyledUsernamePasswordSignInContainer-sc-9mm0lb-0.lBBBb > form > button") .click ()
    cy.wait(10000)
    cy.log("Enter QB username and password and click Sign in") ;

     }) ;


    cy.origin('https://appcenter.intuit.com', () => {

    //  cy.get('#idsDropdownTypeaheadTextField2') .click ()
    //  cy.wait(10000)
     cy.get('#idsDropdownTypeaheadTextField2').type ("Statement test with small data").type ('{downArrow}') .type ('{enter}')
     cy.wait(10000)

                    
      cy.get ("button.StyledButton__Wrapper-vnaxcc-1:nth-child(2)").click ()
      cy.wait(10000)
      cy.log ("Click on the next button")

      cy.get("button.StyledButton__Wrapper-vnaxcc-1:nth-child(10)").click ()
      cy.wait(10000)
      cy.log("click on the connect button")
   
       }) ;


       return this

      }

    AddNewXeroLedger (){

      cy.on("uncaught:exception", (err, runnable) => {

        return false
      })

            
   cy. get ("#container > app-navigation-bar > app-navigation-section.my-integrations.ng-star-inserted > header > h2") .click () ;
   cy. wait (3000) ;
   cy. log ("Click on My integrations tab") ;
    
   cy.get("#integrationSectionHeader > div.buttons > app-button.ng-star-inserted > button").click () ;
   cy.wait(10000) ;
   cy.log ("click on Add Ledger") ;

   cy.get ("#connectLedgerModal > div > div > div.accountsOptions > ul > li.xero > img") .click ()
   cy.wait(10000)
   cy.log("Click on Xero ledger")


   cy.origin('https://login.xero.com', () => {
      
   cy.get ("#xl-form-email") .type ("kitdemo30@know-it.co.uk")
   cy.log("Enter xero username")
   cy.get("#xl-form-password") .type ("Kit@123456")
   cy.log("Enter xero password")
   cy.get("#xl-form-submit") .click ();
   cy.wait(10000)
   cy.log("Login to xero")
  })


   cy.origin("https://authorize.xero.com", function () {
   cy.get ("#multipleTenants > div > button") .click()
   cy.wait(10000)
   cy.get("#\\35 c28dead-9e97-4742-a778-4b6ebc9167cc > button > span").click ()
   cy.wait(10000)


   cy.get("#approveButton") .click ()
   cy.wait(10000)
   cy.log("Select ledger and allow access")
  })
      
   return this

    }

    CsvUpload () {

        cy.on("uncaught:exception" , function () {
  
          return false
  
  
        })
  
        cy.get ("#container > app-navigation-bar > app-navigation-section.my-companies.ng-star-inserted > header > h2") .click ()
        cy.wait (3000)
        cy.log("Click on My Companies")
  
        cy.get("#myCompanies > div > div > button") .click ()
        cy.wait(10000)
        cy.log("Click import customer")
  
        cy.get("#downloadCsvTemplateBox > div").click ()
        cy.wait(10000)
        cy.log("Download template")
  
        cy.get("#downloadCsvTemplateBox > app-button > button").click ()
        cy.wait(10000)
        cy.log("click next")

        cy.scrollTo('top')
        cy.wait(10000)

           
  
        // cy.xpath("//*[@id="uploadCsvTemplateBox"]/div/p[2]").attachFile("CSV upload")     
        
        // cy.get("#uploadCsvTemplateBox > div > p.selectFile").selectFile("new excel file-10.csv")
         cy.wait(10000)
        cy.get("#reviewDataBox > app-button > button").click ()  
                
        
        cy.wait(10000)
                 
        cy.log("Click Select File and attach the file")
  
       return this
  
      }
  
      }
  
  export default MyInt


  