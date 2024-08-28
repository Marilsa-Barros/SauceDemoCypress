const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportHeight: 1080, // altura em pixels
    viewportWidth: 1920, // largura da tela em pixels --> Full HD
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
