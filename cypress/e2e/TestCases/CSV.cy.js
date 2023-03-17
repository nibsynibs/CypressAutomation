class csvimport {

    var csvData = '[{"Name": "Allied Mechanical Services Limited", "Phones": [{"PhoneType": "DDI", "PhoneNumber": "", "PhoneAreaCode": "", "PhoneCountryCode": ""}, {"PhoneType": "DEFAULT", "PhoneNumber": "01638 661062", "PhoneAreaCode": "", "PhoneCountryCode": ""}, {"PhoneType": "FAX", "PhoneNumber": "01638 666538", "PhoneAreaCode": "", "PhoneCountryCode": ""}, {"PhoneType": "MOBILE", "PhoneNumber": "", "PhoneAreaCode": "", "PhoneCountryCode": ""}], "Balances": {"AccountsPayable": {"Overdue": 0, "Outstanding": 0}, "AccountsReceivable": {"Overdue": 0, "Outstanding": 1560}}, "Addresses": [{"City": "", "Region": "", "Country": "", "PostalCode": "", "AddressType": "STREET"}, {"City": "Newmarket", "Region": "Suffolk", "Country": "United Kingdom", "PostalCode": "CB8 7SQ", "AddressType": "POBOX", "AttentionTo": "Kirsteen Webb", "AddressLine1": "Goodwin Business Park", "AddressLine2": "Willie Snaith Road"}], "ContactID": "3617d63e-f5d7-49d6-8595-a38c974da31e", "FirstName": "Kirsteen Webb", "TaxNumber": "", "IsCustomer": true, "IsSupplier": false, "EmailAddress": "k.webb@alliedservices.co.uk", "AccountNumber": "ALLIED", "ContactGroups": [], "ContactNumber": "", "ContactStatus": "ACTIVE", "ContactPersons": [], "HasAttachments": false, "UpdatedDateUTC": "/Date(1674902557467+0000)/", "BankAccountDetails": "", "HasValidationErrors": false, "SalesDefaultAccountCode": "4000", "SalesTrackingCategories": [{"TrackingOptionName": "Central", "TrackingCategoryName": "Department"}], "PurchasesTrackingCategories": [{"TrackingOptionName": "Central", "TrackingCategoryName": "Department"}]}]';

    let data = JSON.parse(csvData);
    
    // Access properties using dot notation or square bracket notation
    console.log(data[0].Name); // "Allied Mechanical Services Limited"
    console.log(data[0].Phones[0].PhoneType); // "DDI"
    console.log(data[0].Balances.AccountsPayable.Overdue); // 0
    console.log(data[0].Addresses[1].Country); // "United Kingdom"







}