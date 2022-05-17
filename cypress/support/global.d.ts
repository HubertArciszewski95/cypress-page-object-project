declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to login to the app by API.
         * @example cy.login();
         */
        login: typeof login;

        /**
         * Enable to assert on URL that inclue the # character
         * @example cy.verifyUrl('#/users/1');
         */
         verifyUrl: typeof verifyUrl
    }
}