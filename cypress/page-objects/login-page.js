/// <reference types="Cypress" />

class LoginPage {

    elements = {
        pageTitle: () => cy.get('h1'),
        registerTextLink: () => cy.contains('Need an account?'),
        emailInput: () => cy.get('[type=email]'),
        passwordInput: () => cy.get('[type=password]'),
        signInButton: () => cy.get('[type=submit]'),
        errorMessage: () => cy.get('.error-messages')
    }
    
    navigate() {
        const url = '#/login';
        cy.visit(url);
        cy.verifyUrl(url);
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickSignIn() {
        this.elements.signInButton().click();
    }
}
export default new LoginPage();