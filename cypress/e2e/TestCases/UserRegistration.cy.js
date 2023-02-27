import Registration from "../PageObjects/Registration.cy"

describe ("user registreation" , function () {
    it ("New Registration",() => {

        const re = new Registration ()
        re.logintoURL ()
        re.UserReg ("Jack" ,"Fruit" ,"account2023-100@test.com" , "Kit@12345678")




    })

})