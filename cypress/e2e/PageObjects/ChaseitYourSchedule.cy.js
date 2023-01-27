///<reference types ="cypress"/>

class yourschedule {

    SelectLedger () {
        cy.get ("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > header > img").click ()
        cy.wait(3000)
        cy.log("Click on Chase-it")

        cy.get("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > ul > li:nth-child(2) > a").click ()
        cy.wait(3000)
        cy.log("click on Your Schedule")

      //   cy.get("#ledgerSelector") . select (1)
      //   cy.wait(3000)
      //   cy.log("Select Ledger")

        return this

    }

 Reminder (hr,mins) {

      cy.get ("#hourDigits > input[type=text]").click ().type (hr)
      cy.wait(3000)
      cy.get("#minuteDigits > input[type=text]").click().type (mins)
      cy.wait(3000)
      cy.log("Enter hours and mins")
      cy.get("#schedule > app-welcomebox > div > app-schedule-time > div.timeSave.ng-star-inserted > div").click ()
      cy.wait(3000)
    
    return this 
 }

 InitialChase () {

    cy.get("#initialReminder > div.reminderItems.ng-star-inserted > div > div.reminderTitle > div").click ()
    cy.wait(3000)
    cy.log("Click on View All templates")

    cy.go('back')
    cy.wait(3000)
    cy.log("Go to the previous page")
    

    cy.get("#initialReminder > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div > div.reminderTypeTemplate > app-template-selector > select").select (1)
    cy.wait(3000)
    cy.log("Select from the template")


    cy.get("#initialReminder > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div > div.reminderTypeToggle > div > label > div").click()
    cy.wait(3000)
    cy.log("Enable Email")

    cy.get("#initialEnableMsg > div.info > div > div.cancelActivation").click()
    cy.wait(3000)
    cy.log("Click on I'm not ready yet")

    cy.get("#initialReminder > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div > div.reminderTypeToggle > div > label > div").click()
    cy.wait(3000)
    cy.log("Enable Email")

    cy.get("#initialEnableMsg > div.info > div > div.activateSchedule").click ()
    cy.wait(3000)
    cy.log("Click Activate My Schedule")

    cy.get("#initialReminder > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div > div.reminderPreview > div").click ()
    cy.wait(3000)
    cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
    cy.wait(3000)
    cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span").click ()
    cy.wait(3000)
    cy.log("Verify the preview function")

   return this


 }

 Befordue (duedate) {

   cy.get("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderTitle > h4 > input").clear ().type(duedate)
   cy.get("#beforeDueReminders > div.sectionHeader > div > h3").click ()
   cy.wait(3000)
   cy.log("Set days before reminder")

   cy.get("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderTitle > div").click ()
   cy.wait(3000)
   cy.log("Click on the view Templates button")

   cy.go('back')
   cy.wait(3000)
   cy.log("Go to the previous page")


   cy.get ("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderTypeTemplate > app-template-selector > select").select (2)
   cy.wait(3000)
   cy.log("select Before due from the dropdown")


   cy.get("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderTypeToggle > div > label > div").click ()
   cy.wait (5000)
   cy.log("Enable email chase")

   cy.get ("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderPreview > div").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
   cy.wait(3000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span").click()
   cy.wait(3000)
   cy.log("Verify the email- preview function")


   cy.get ("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderTypeTemplate > app-template-selector > select").select (0)
   cy.wait(3000)
   cy.log("select Before due-letter from the dropdown")


   cy.get("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderTypeToggle > div > label > div").click ()
   cy.wait (5000)
   cy.log("Enable letter chase")

   cy.get ("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderPreview > div").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
   cy.wait(3000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span").click()
   cy.wait(3000)
   cy.log("Verify letter preview function")


   cy.get ("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderTypeTemplate > app-template-selector > select").select (0)
   cy.wait(3000)
   cy.log("select Before due-sms from the dropdown")


   cy.get("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderTypeToggle > div > label > div").click ()
   cy.wait (5000)
   cy.log("Enable sms chase")

   cy.get ("#beforeDueReminders > div.reminderItems.ng-star-inserted > div > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderPreview > div").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
   cy.wait(3000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span").click()
   cy.wait(3000)
   cy.log("Verify sms preview function")

   return this

}

Overdue1 (daysover1) {

   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderTitle > h4 > input").clear ().type(daysover1)
   cy.get("#overdueReminders > div.sectionHeader > div.sectionTitle > h3").click ()
   cy.wait(3000)
   cy.log("Set days before reminder")

   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderTitle > div").click ()
   cy.wait(3000)
   cy.log("Click on the view Templates button")

   cy.go('back')
   cy.wait(3000)
   cy.log("Go to the previous page")


   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderTypeTemplate > app-template-selector > select").select (3)
   cy.wait(3000)
   cy.log("select first overdue from the dropdown")


   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderTypeToggle > div > label > div ").click ()
   cy.wait (5000)
   cy.log("Enable email chase")

   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderPreview > div ").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span ").click ()
   cy.wait(3000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span").click()
   cy.wait(3000)
   cy.log("Verify the email- preview function")


   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderTypeTemplate > app-template-selector > select ").select (1)
   cy.wait(3000)
   cy.log("select Overdue-letter from the dropdown")


   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderTypeToggle > div > label > div ").click ()
   cy.wait (5000)
   cy.log("Enable letter chase")

   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderPreview > div ").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span ").click ()
   cy.wait(3000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span ").click()
   cy.wait(3000)
   cy.log("Verify letter preview function")


   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderTypeTemplate > app-template-selector > select").select (1)
   cy.wait(3000)
   cy.log("select Overduedue-sms from the dropdown")


   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderTypeToggle > div > label > div").click ()
   cy.wait (5000)
   cy.log("Enable sms chase")

   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(1) > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderPreview > div").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
   cy.wait(3000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span").click()
   cy.wait(3000)
   cy.log("Verify sms preview function")

   return this

}

Overdue2 (daysover2) {

   
   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(3) > div.reminderTitle > h4 > input").clear ().type(daysover2)
   cy.get("#overdueReminders > div.sectionHeader > div.sectionTitle > h3").click ()
   cy.wait(3000)
   cy.log("Set days before reminder")

   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderTitle > div").click ()
   cy.wait(3000)
   cy.log("Click on the view Templates button")

   cy.go('back')
   cy.wait(3000)
   cy.log("Go to the previous page")


   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderTypeTemplate > app-template-selector > select").select (3)
   cy.wait(3000)
   cy.log("select Second overdue from the dropdown")


   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderTypeToggle > div > label > div ").click ()
   cy.wait (5000)
   cy.log("Enable email chase")

   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.emailReminder > div.reminderPreview > div").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span ").click ()
   cy.wait(3000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span ").click()
   cy.wait(3000)
   cy.log("Verify the email- preview function")


   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderTypeTemplate > app-template-selector > select").select (3)
   cy.wait(3000)
   cy.log("select Overdue-letter from the dropdown")


   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderTypeToggle > div > label > div").click ()
   cy.wait (5000)
   cy.log("Enable letter chase")

   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.letterReminder > div.reminderPreview > div").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
   cy.wait(3000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span").click()
   cy.wait(3000)
   cy.log("Letter chase preview")


   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderTypeTemplate > app-template-selector > select ").select (3)
   cy.wait(3000)
   cy.log("select Overduedue-sms from the dropdown")


   cy.get("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderTypeToggle > div > label > div").click ()
   cy.wait (5000)
   cy.log("Enable sms chase")

   cy.get ("#overdueReminders > div.reminderItems.ng-star-inserted > div:nth-child(2) > div.reminderMediaTypes > div.mediaType.smsReminder > div.reminderPreview > div").click ()
   cy.wait(3000)
   cy.get("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
   cy.wait(2000)
   cy.get ("#chase > app-chase-schedule > app-chase-preview-dialog > app-modal > div > div > div > button > span").click()
   cy.wait(3000)
   cy.log("Verify sms preview function")

   return this
 

}


}

export default yourschedule