class CheckitDashboard {

    CheckDashboard () {
        cy.on('uncaught:exception' , () => {

            return false

        })


        cy.xpath("//p[normalize-space()='Skip Ledger']").click ()
        cy.wait(2000)
        cy.log("Skip ledger")

        cy.xpath("//img[@alt='Check-It']") .click ()
        cy.xpath("//a[normalize-space()='Dashboard']").click ()
        cy.wait(3000)
        cy.log("Get to the Check-it Dashboard")
    }

        DisableData () {

        cy.xpath("//p[normalize-space()='Get your first credit report to unlock!']"). should ('contain', 'Get your first credit report to unlock!')
        cy.xpath("//p[normalize-space()='Get your first credit report to unlock!']").contains( 'Get your first credit report to unlock!')

        cy.log("Check-it Dashboard-Disable data on  Credit monitoring and Credit report archived before purchasing credit report")


        cy.xpath("//p[normalize-space()='Connect your ledger to unlock!']"). should ('contain', 'Connect your ledger to unlock!')
        cy.xpath("//p[normalize-space()='Connect your ledger to unlock!']").contains('Connect your ledger to unlock!')

        cy.log("Check-it Dashboard-Disable data  before purchasing credit report or adding ledger")



        cy.xpath("//a[normalize-space()='Credit Reports']") .click ()
        cy.xpath("//p[normalize-space()='Get your first credit report to unlock!']").should ('have.text', 'Get your first credit report to unlock!')
        cy.xpath("//p[normalize-space()='Get your first credit report to unlock!']").contains('Get your first credit report to unlock!')
        cy.log("Verify no data is showing on the Credits Report page")

        cy.xpath("//a[normalize-space()='Credit Monitoring']").click ()
        cy.xpath("//p[normalize-space()='Get your first credit report to unlock!']"). should ('contain', 'Get your first credit report to unlock!')
        cy.xpath("//p[normalize-space()='Get your first credit report to unlock!']").contains('Get your first credit report to unlock!')
        cy.log("Verify no data is showing on the Credit Monitoring  page")

        cy.xpath("//a[normalize-space()='Notices']").click ()
        cy.xpath("//p[normalize-space()='Connect your ledger to unlock your customers!']"). should ('contain', 'Connect your ledger to unlock your customers!')
        cy.xpath("//p[normalize-space()='Connect your ledger to unlock your customers!']"). contains('Connect your ledger to unlock your customers!')                                                                         

        cy.xpath("//a[normalize-space()='Companies House']").click ()
        cy.xpath("//p[normalize-space()='Connect your ledger to unlock!']").should ('contain', 'Connect your ledger to unlock!')
        cy.xpath("//p[normalize-space()='Connect your ledger to unlock!']"). contains('Connect your ledger to unlock!')  
        cy.log("Verify no data is showing on the Companies House page")

        return this

      }
      }

      export default CheckitDashboard



    


     











    




































