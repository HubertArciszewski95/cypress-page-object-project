/// <reference types="Cypress" />

class HeaderComponent {

    elements = {
        welcomeBanner: () => cy.get('.banner'),
        navLink: () => cy.get('.nav-link'),
    }

}

export default new HeaderComponent();