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
        cy.visit('#/login');
    }

    typeEmail(email: string) {
        this.elements.emailInput().type(email);
    }

    typePassword(password: string) {
        this.elements.passwordInput().type(password);
    }

    clickSignIn() {
        this.elements.signInButton().click();
    }
}
export default new LoginPage();