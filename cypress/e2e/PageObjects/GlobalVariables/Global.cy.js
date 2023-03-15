///<reference types="cypress"/>

class variables {

    

    //Global Dashboard Calendar
   GlobalDshbrd ='//app-navigation-section[@class="main-dashboard ng-star-inserted"]'
   calendaricon = "//span[@class='calendar']"
   calendarprevbtn ='//*[@id="dashboard"]/app-welcomebox/div/app-date-range/app-modal/div/div/div[1]/div[2]/app-calendar-range/app-calendar[1]/header/button[1]'
   firstdayofthemonth ='//td[@class="inside-calendar-month end-of-week start-of-month ng-star-inserted"]'
   lastdaofthemonth = '//*[@id="dashboard"]/app-welcomebox/div/app-date-range/app-modal/div/div/div[1]/div[2]/app-calendar-range/app-calendar[2]/table/tbody/tr[5]/td[6]/button'
   calendarokbtn="//button[normalize-space()='Ok']"
   
   //Global Dashboard (Check-it)
   monitoringchangesmoreinfo ="//li[@class='check-it ng-star-inserted']//li[1]//app-widget-counter[1]//div[1]//span[1]"
   monitoringchangeseventdesc ="//div[normalize-space()='Event Description']"
   monitoringchangescompname='//div[normalize-space()="Company Name"]'


   
    //Global Dashboard (Chase-it) 
    chaseitamtdue = "//li[@class='chase-it ng-star-inserted']//button[contains(text(),'Amount due')]"
    moreinfo='//*[@id="dashboard"]/app-widget-container/ul/li[2]/ul/li[1]/app-widget-tab-group/app-widget-currency/div/span'
    closepopupbutton = "//div[@class='modalCloseButton']"




}

export default variables