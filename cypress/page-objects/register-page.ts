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
        cy.visit('#/register');
    }

    typeUsername(username: string) {
        this.elements.usernameInput().type(username);
    }

    typeEmail(email: string) {
        this.elements.emailInput().type(email);
    }

    typePassword(password: string) {
        this.elements.passwordInput().type(password);
    }

    clickSignUp() {
        this.elements.signUpButton().click();
    }
}
export default RegisterPage;