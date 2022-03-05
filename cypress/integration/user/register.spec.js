/// <reference types="Cypress" />

import registerPage from '../../page-objects/register-page'

import userExisting from '../../fixtures/user-existing.json'
import userNotExisting from '../../fixtures/user-not-existing.json'

describe('Register', () => {

    beforeEach(() => {
        registerPage.navigate();
    });

    it("should redirect unauthenticated user to signin page", () => {
        cy.visit("/personal");
        cy.location("pathname").should("equal", "/signin");
    });

    it('should display "Sign up" title', () => {
        registerPage.elements.pageTitle().should('have.text', 'Sign up');
    });

    it('should display "Have an account?" and links to #/login', () => {
        registerPage.elements.loginTextLink().should('have.attr', 'href', '#/login');
    });

    it('should display error when email field is empty', () => {
        registerPage.clickSignUp();
        registerPage.elements.errorMessage().should('contain', "email can't be blank");
    });

    it('should display error when username field is empty', () => {
        registerPage.typeEmail(`${userNotExisting.email}{enter}`);
        registerPage.elements.errorMessage().should('contain', "username can't be blank");
    });

    it('should display error when password field is empty', () => {
        registerPage.typeUsername(userNotExisting.username);
        registerPage.typeEmail(`${userNotExisting.email}{enter}`);

        registerPage.elements.errorMessage().should('contain', "password can't be blank");
    });

    it('should display error when email is taken', () => {
        registerPage.typeUsername(userNotExisting.username);
        registerPage.typeEmail(userExisting.email);
        registerPage.typePassword(`${userNotExisting.password}{enter}`);

        registerPage.elements.errorMessage().should('contain', "email has already been taken");
    });

    it('should display error when username is taken', () => {
        registerPage.typeUsername(userExisting.username);
        registerPage.typeEmail(userNotExisting.email);
        registerPage.typePassword(`${userNotExisting.password}{enter}`);

        registerPage.elements.errorMessage().should('contain', "username has already been taken");
    });
    
    it('should display two errors when username and email are taken', () => {
        registerPage.typeUsername(userExisting.username);
        registerPage.typeEmail(userExisting.email);
        registerPage.typePassword(`${userNotExisting.password}{enter}`)

        registerPage.elements.errorMessage()
        .should('contain', "email has already been taken")
        .should('contain', "username has already been taken");
    });
    
    it('should redirect to the home page after register', () => {
        // userNotExisting should be deleted after each run of this test. To make possible to register him again.
        // DELETE API don't exist. So below is a example.

        // registerPage.typeUsername(userNotExisting.username);
        // registerPage.typeEmail(userNotExisting.email);
        // registerPage.typePassword(`${userNotExisting.password}{enter}`);
        // cy.verifyUrl('#/');

        // cy.deleteUser(userNotExisting.username, userNotExisting.email);
    });
});