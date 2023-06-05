///<reference types ="cypress"/>

describe("Handling child tabs",() => {

    //open the tab on the same window(Use this approach)
    it("Approach-1= Handling page in a different tab", () => { 

    cy.visit("https://the-internet.herokuapp.com/windows")

    //Remove the target element . Target element is like class, id and so on on inspect when writing manual xpath.
    //.invoke('remobeAttr', ) remove that attribute so that the child tab will display on the same page.

    cy.xpath ("//a[normalize-space()='Click Here']").invoke ('removeAttr','target').click ()

    cy.url (). should ('include', "https://the-internet.herokuapp.com/windows.new")

    //Go to the parent tab
    cy.go('back')

    })

    it("Approach-2= Handling page in a different tab", () => { 

        cy.visit("https://the-internet.herokuapp.com/windows")
        //Here create a function and store it in a variable called e.
        //e.prop ('has to be href tag')

        cy.xpath ("//a[normalize-space()='Click Here']").then((e) => {

        let url = e.prop('href') ;
        cy.visit(url)

         })

         cy.url (). should ('include', "https://the-internet.herokuapp.com/windows.new")



})
})
