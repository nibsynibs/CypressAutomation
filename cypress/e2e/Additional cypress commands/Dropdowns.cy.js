

describe ("drop-downs" , () =>{
    it.skip("Hnadle dropdowns", function (){

        //Normal dropdowns
        //it.skip will not run the block. Same as //

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.xpath ('//*[@id="zcf_users"').select("selling offline")
        .should ('have.value',"selling offline")

    })

    it.skip("dropdowns without using .select", () => {

        //Here you click on the dropdown icon, type in the search and press enter

        cy.visit ("https://www.dummyticket.com/dummy-ticket-for-visa-application/") 
        cy.xpath('//*[@id="select2-billing_country-container"]').click ()
        cy.xpath("/html/body/span/span/span[1]/input"). type("England") .type('{Enter}')
        cy.xpath('//*[@id="select2-billing_country-container"]').should('have.value', 'England')

        


    })

    it("auto suggest dropdowns" ,() => {

       //Created xpath (//div[@class="suggestion-text"])
       

        
        cy.visit("https://www.wikipedia.org/")
        cy.xpath('//*[@id="searchInput"]').type("Scotland")
        cy.xpath('//div[@class="suggestion-text"]') .should ('have.length', 6)
        cy.xpath('//div[@class="suggestion-text"]') .contains ("Scotland").click ()



    })



})