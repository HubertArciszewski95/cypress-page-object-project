/// <reference types="Cypress" />

import registerPage from '../../page-objects/register-page'

import userExisting from '../../fixtures/user-existing.json'
import userNotExisting from '../../fixtures/user-not-existing.json'

describe('Register', () => {

    beforeEach(() => {
        registerPage.navigate();
    });

    it('Verify if "Sign up" title is displayed', () => {
        registerPage.elements.pageTitle().should('have.text', 'Sign up');
    });

    it('Verify if "Have an account?" links to #/login', () => {
        registerPage.elements.loginTextLink().should('have.attr', 'href', '#/login');
    });

    it('Verify if validation message is displayed when email field is empty', () => {
        registerPage.clickSignUp();
        registerPage.elements.errorMessage().should('contain', "email can't be blank");
    });

    it('Verify if validation message is displayed when username field is empty', () => {
        registerPage.typeEmail(`${userNotExisting.email}{enter}`);
        registerPage.elements.errorMessage().should('contain', "username can't be blank");
    });

    it('Verify if validation message is displayed when password field is empty', () => {
        registerPage.typeUsername(userNotExisting.username);
        registerPage.typeEmail(`${userNotExisting.email}{enter}`);

        registerPage.elements.errorMessage().should('contain', "password can't be blank");
    });

    it('Verify if validation message is displayed when email is taken', () => {
        registerPage.typeUsername(userNotExisting.username);
        registerPage.typeEmail(userExisting.email);
        registerPage.typePassword(`${userNotExisting.password}{enter}`);

        registerPage.elements.errorMessage().should('contain', "email has already been taken");
    });

    it('Verify if validation message is displayed when username is taken', () => {
        registerPage.typeUsername(userExisting.username);
        registerPage.typeEmail(userNotExisting.email);
        registerPage.typePassword(`${userNotExisting.password}{enter}`);

        registerPage.elements.errorMessage().should('contain', "username has already been taken");
    });
    
    it('Verify if two validation messages are displayed when username and email are taken', () => {
        registerPage.typeUsername(userExisting.username);
        registerPage.typeEmail(userExisting.email);
        registerPage.typePassword(`${userNotExisting.password}{enter}`)

        registerPage.elements.errorMessage()
        .should('contain', "email has already been taken")
        .should('contain', "username has already been taken");
    });
    
    it('Verify if navigates to #/ on successful register', () => {
        // userNotExisting should be deleted after each run of this test. To make possible to register him again.
        // DELETE API don't exist. So below is a example.

        // registerPage.typeUsername(userNotExisting.username);
        // registerPage.typeEmail(userNotExisting.email);
        // registerPage.typePassword(`${userNotExisting.password}{enter}`);
        // cy.verifyUrl('#/');

        // cy.deleteUser(userNotExisting.username, userNotExisting.email);
    });
});