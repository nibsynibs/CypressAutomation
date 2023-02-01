///<reference types ="cypress"/>

import mycomp from "../PageObjects/Mycompanies"

describe ("My comp" , function () {
    it ("My companies" , function () {

        
        const mc = new mycomp ()
        mc.Comp ()
        mc.SelectCompany ()
        mc.Row()
        mc.Companysearch ("Basket Case") 
        mc.switchview ("Ridgeway University")

       


    })


})
