import Registration from "../PageObjects/Registration.cy"

describe ("user registreation" , function () {
    it ("New Registration",() => {

        const re = new Registration ()
        re.LogintoURL ()
        re.Createanaccount ()
        re.Email ("newknow-itautomationtest@test.com")
        re.CompanyandUserDetail ("Kit@12345678")
        re.Optionalfields ()




    })

})