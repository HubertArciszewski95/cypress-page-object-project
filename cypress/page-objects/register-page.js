/// <reference types="Cypress" />

class RegisterPage {

    elements = {
        pageTitle: () => cy.get('h1'),
        loginTextLink: () => cy.contains('Have an account?'),
        usernameInput: () => cy.get("[type='text']"),
        emailInput: () => cy.get('[type=email]'),
        passwordInput: () => cy.get('[type=password]'),
        signUpButton: () => cy.get('[type=submit]'),
        errorMessage: () => cy.get('.error-messages')
    }
    
    navigate() {
        const url = '#/register';
        cy.visit(url);
        cy.verifyUrl(url);
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickSignUp() {
        this.elements.signUpButton().click();
    }
}
export default new RegisterPage();