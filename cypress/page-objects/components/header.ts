/// <reference types="Cypress" />

class Header {

    elements = {
        welcomeBanner: () => cy.get('.banner'),
        navLink: () => cy.get('.nav-link'),
    }

}

export default Header;