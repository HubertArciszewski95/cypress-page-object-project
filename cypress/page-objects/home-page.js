/// <reference types="Cypress" />

class homePage {

    elements = {

    }
    
    navigate() {
        const url = '#/';
        cy.visit(url);
        cy.verifyUrl(url)
    }
}
export default new homePage();