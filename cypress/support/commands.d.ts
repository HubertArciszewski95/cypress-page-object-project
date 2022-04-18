declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to login to the app by API.
         * @example cy.login();
         */
        login(): void
        
        verifyUrl(url: string): void
    }
}


