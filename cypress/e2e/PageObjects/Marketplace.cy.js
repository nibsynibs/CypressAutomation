///<reference types ="cypress"/>

class Markeptplacepurchase  {

    Marketp(){

        cy.on("uncaught:exception" , () => {
            return false

        })

        cy.get("#container > app-navigation-bar > app-navigation-section.marketplace.ng-star-inserted > header > h2").click ()
        cy.wait(2000)
        cy.log("click on Marketplace")

        cy.get("#productList > section.check > div.products > div > div.product-box-right > div.product-box-right_bottom > button").click ()
        cy.wait(2000)
        cy.log ("Click on Credit Report add to basket")

        cy.get("#productList > div > div > button").click ()
        cy.wait(2000)
        cy.log("click on checkout")

        for (let i=0 ; i<3 ; i++) {
        cy.get ("#basketItems > tbody.basket-items > tr > td.center.qtyControls.ng-star-inserted > span.increaseQty").click ()
        cy.wait(3000)
        cy.log ("select quantity x 3")
        }

        cy.get ("#basketBox > app-button > button").click ()
        cy.wait(3000)
        cy.log("click on checkout")

            cy.get("#form-customer-name").type("N Pkh")
            cy.get("#form-customer-address").type("76 Roseby Avenue Manchester")
            cy.get("#form-customer-postcode").type("M63X 7TH")
            cy.wait(3000)
            cy.get("#form-card-number-hostedfield > input.hostedfield.hf-empty.card-number.hf-user-valid.hf-placeholder-shown.hf-required.hf-enabled.hf-invalid").type("4543 0599 9999 9982")
            cy.get("#form-card-start-date-hostedfield > input").type("1220")
            cy.get("#form-card-expiry-date-hostedfield > input.hostedfield.hf-empty.hf-user-valid.hf-placeholder-shown.hf-required.hf-enabled.hf-invalid").type("1225")
            cy.get("#form-card-cvv-hostedfield > input").type("110")
      
        return this

        }

        // Payment () {

        //     cy.get("#form-customer-name").type("N Pkh")
        //     cy.get("#form-customer-address").type("76 Roseby Avenue Manchester")
        //     cy.get("#form-customer-postcode").type("M63X 7TH")
        //     cy.get("#form-card-number-hostedfield > input.hostedfield.hf-empty.card-number.hf-user-valid.hf-placeholder-shown.hf-required.hf-enabled.hf-invalid").type("4543 0599 9999 9982")
        //     cy.get("#form-card-start-date-hostedfield > input").type("1220")
        //     cy.get("#form-card-expiry-date-hostedfield > input.hostedfield.hf-empty.hf-user-valid.hf-placeholder-shown.hf-required.hf-enabled.hf-invalid").type("1225")
        //     cy.get("#form-card-cvv-hostedfield > input").type("110")

        //    return this


        // }






    }

    export default Markeptplacepurchase

    	































