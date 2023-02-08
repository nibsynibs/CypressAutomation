///<reference types ="cypress"/>

import Markeptplacepurchase from "../PageObjects/Marketplace.cy"

describe ("Marketplace purchase", function (){
    it("Markeptplace credit purchase", function () {

    cy.login()
    const mt = new Markeptplacepurchase ()
    mt.Marketp ()
    // mt.Payment ()
    
    















    })



})