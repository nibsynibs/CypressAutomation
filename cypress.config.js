module.exports = {
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
