declare namespace Cypress {
    interface Chainable {
        /**
         * Enable to assert on URL that inclue the # character
         * @example cy.verifyUrl('#/users/1');
         */
        verifyUrl: typeof verifyUrl
    }
}

const verifyUrl = (url: string) => {
    cy.hash().should('eq', url);
};

Cypress.Commands.addAll({ verifyUrl });