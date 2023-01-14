export const verifyUrl = (url: string): void => {
    cy.hash().should('eq', url);
};

Cypress.Commands.add('verifyUrl', verifyUrl);