///<reference types = "cypress"/>

class chasetemplate {


    EditSchedule () {
    
            
        cy.get ("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > header > img").click ()
        cy.log("Click on the chase it")
    
        cy.get("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > ul > li:nth-child(3) > a").click ()
        cy.log("click on templates")
       
        cy.get("#schedule-edit").click () ;
        cy.wait(5000)
       // cy.title ().should ('eq','Know-it-Chase-it-Your Schedule')
       cy.log("Click on Edit Schedule to take to the Your schedule page to schedule chasers")
        
        return this
    
    }
    
    EmailTemplates (template,subject,emailmessage,subjectmulti,emailmessagemulti) {
    
    cy.get("#container > app-navigation-bar > app-navigation-section.chase.ng-star-inserted > ul > li:nth-child(3) > a").click ()
    cy.log("click on templates")
    
    cy.get ("#defaultTemplates").select (1)
    cy.wait (3000)
    cy.log('Select from the template dropdown')
     
    
    cy.get("#templates > app-chase-template:nth-child(3) > div > header > button").click ()
    cy.wait (3000)
    cy.log("click Create new")
     
    
    cy.get("#chase > app-chase-templates > app-modal > div > div > div > div.footer > button.outlined").click ()
    cy.wait (3000)
    cy.log("click cancel on the popup")
     
    
    cy.get("#templates > app-chase-template:nth-child(3) > div > header > button").click ()
    cy.wait (3000)
    cy.log("click Create new")
     
    
    cy.get("#templateName").type (template)
    cy.wait (3000)
    cy.log(" Template name")
     
    
    cy.get("#defaultTemplatesSelection").select(1)
    cy.wait (3000)
    cy.log("Select template")
     
    
    
    cy.get('#chase > app-chase-templates > app-modal > div > div > div > div.footer > button.filled').click ()
    cy.wait (3000)
    cy.log("Click Create New+ to create a new template")
    
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(3) > app-template-editor > quill-editor > div.ql-container.ql-snow > div.ql-editor > p"). clear ().type(subject)        
    cy.wait(3000)
    cy.log("Enter subject line")
    
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(6) > app-template-editor > quill-editor > div.ql-container.ql-snow > div.ql-editor > p:nth-child(4)").type(emailmessage)
    cy.wait(5000)
    cy.log("Enter email message")
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(4) > div.group-inline.separator > button") .click ()
    cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
    cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > button > span").click ()
    cy.wait(5000)
    cy.log("Verify the preview feature")
    
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(5) > app-template-editor > quill-editor > div.ql-container.ql-snow > div.ql-editor > p").type(subjectmulti)
    cy.wait(5000)
    cy.log("Enter subject line")
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(6) > app-template-editor > quill-editor > div.ql-container.ql-snow > div.ql-editor > p:nth-child(4)").type(emailmessagemulti)
    cy.wait(5000)
    cy.log("Enter email message")
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(6) > div.group-inline > button") .click ()
    cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
    cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > button > span").click ()
    cy.wait(5000)
    cy.log("Verify the preview feature")
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > div > div.saveTemplate > app-button > button").click()
    cy.wait(5000)
    cy.log("Save template")
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > div > div.closePanel > app-button > button") .click ()
    cy.wait(3000)
    cy.log("Close pop up")
    
    return this
    
    }
    
    LetterTemplates(lettertemplate) {
    
    cy.get ("#defaultTemplates").select (2)
    cy.wait (3000)
    cy.log('Select from the template dropdown')
     
    
    cy.get("#templates > app-chase-template:nth-child(4) > div > header > button").click ()
    cy.wait (3000)
    cy.log("click Create new")
     
    
    cy.get("#chase > app-chase-templates > app-modal > div > div > div > div.footer > button.outlined").click ()
    cy.wait (3000)
    cy.log("click cancel on the popup")
     
    
    cy.get("#templates > app-chase-template:nth-child(4) > div > header > button").click ()
    cy.wait (3000)
    cy.log("click Create new")
     
    
    cy.get("#templateName").type (lettertemplate)
    cy.wait (3000)
    cy.log(" Template name")
     
    
    cy.get("#defaultTemplatesSelection").select(1)
    cy.wait (3000)
    cy.log("Select template")
     
    
    
    cy.get('#chase > app-chase-templates > app-modal > div > div > div > div.footer > button.filled').click ()
    cy.wait (3000)
    cy.log("Click Create  to create a new template")
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(4) > div.group-inline.separator > button") .click ()
    cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
    cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > button > span").click ()
    cy.wait(5000)
    cy.log("Verify the preview feature")
    
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(6) > div.group-inline > button ") .click ()
    cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span ").click ()
    cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > button > span").click ()
    cy.wait(5000)
    cy.log("Verify the preview feature")
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > div > div.saveTemplate > app-button > button").click()
    cy.wait(5000)
    cy.log("Save template")
    
    cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > div > div.closePanel > app-button > button") .click ()
    cy.wait(3000)
    cy.log("Close pop up")
    cy.wait(5000)
    
    return this
    
    
    }
    
    SMSTemplates(emailtemplate) {
    
        cy.get ("#defaultTemplates").select (3)
        cy.wait (3000)
        cy.log('Select from the template dropdown')
         
        
        cy.get("#templates > app-chase-template:nth-child(5) > div > header > button").click ()
        cy.wait (3000)
        cy.log("click Create new")
         
        
        cy.get("#chase > app-chase-templates > app-modal > div > div > div > div.footer > button.outlined ").click ()
        cy.wait (3000)
        cy.log("click cancel on the popup")
         
        
        cy.get("#templates > app-chase-template:nth-child(5) > div > header > button").click ()
        cy.wait (3000)
        cy.log("click Create new")
         
        
        cy.get("#templateName").type (emailtemplate)
        cy.wait (3000)
        cy.log(" Template name")
         
        
        cy.get("#defaultTemplatesSelection").select(1)
        cy.wait (3000)
        cy.log("Select template")
         
        
        
        cy.get('#chase > app-chase-templates > app-modal > div > div > div > div.footer > button.filled').click ()
        cy.wait (5000)
        cy.log("Click Create  to create a new template")
        
        cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section.first.ng-star-inserted > div.group-inline.separator > button") .click ()
        cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
        cy.wait(5000)
        cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > button > span").click ()
        cy.wait(5000)
        cy.log("Verify the preview feature")
        
        
        cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > section:nth-child(3) > div.group-inline > button") .click ()
        cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > header > app-toggle-button > label > div > span").click ()
        cy.get("#chase > app-chase-templates > app-chase-preview-dialog > app-modal > div > div > div > button > span").click ()
        cy.wait(5000)
        cy.log("Verify the preview feature")
        
        cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > div > div.saveTemplate > app-button > button").click()
        cy.wait(5000)
        cy.log("Save template")
        
        cy.get("#chase > app-chase-templates > app-slidepanel > div.slidePanelContent > div > div > div.closePanel > app-button > button") .click ()
        cy.wait(3000)
        cy.log("Close pop up")
        
        return this
        
        
        }
    
    
    }
    
    export default  chasetemplate