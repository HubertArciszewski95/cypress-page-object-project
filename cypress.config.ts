import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo.realworld.io/',
    supportFile: "cypress/support/e2e.ts",
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    setupNodeEvents(on, config) {
    },
  },
})
