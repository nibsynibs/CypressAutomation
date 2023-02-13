/// <reference types ="cypress"/>

import companieshouse from "../PageObjects/CheckitCompanieshouse.cy"

describe ("Check-it companies house" , function () {

    it ("companies house" , function () {

        cy.login ()
        const co = new companieshouse ()
        co.comphouse ("SALTMARSH LIMITED")
        cy.logout()

    })






})