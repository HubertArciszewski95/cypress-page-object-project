/// <reference types="Cypress" />

import loginPage from '../../page-objects/login-page'
import user from '../../fixtures/user-existing.json'

describe('Login', () => {

    beforeEach(() => {
        loginPage.navigate();
    });

    it('Verify if "Sign in" title is displayed', () => {
        loginPage.elements.pageTitle().should('have.text', 'Sign in');
    });

    // Why don't click throught this link to verifi that is goes to register page?
    // This is because we test login_spec in isolation. We don't need to test browser default behavior.
    // We know activating the anchor link updates the browser url.
    // So this saves us from having login_spec knowing any detail about registration page.
    // That knowlede will and should only exist in registration_spec
    it('Verify if "Need an account?" links to #/register', () => {
        loginPage.elements.registerTextLink().should('have.attr', 'href', '#/register')
    });

    // This test fails because of issue on the page
    it('Verify if validation message is displayed when email field is empty', () => {
        loginPage.clickSignIn();
        loginPage.elements.errorMessage().should('contain', "email can't be blank");
    });

    it('Verify if validation message is displayed when password field is empty', () => {
        loginPage.typeEmail(`${user.email}{enter}`);
        loginPage.elements.errorMessage().should('contain', "password can't be blank");
    });

    it('Verify if validation message is displayed when email and password fields are invalid', () => {
        loginPage.typeEmail(`${user.email}`);
        loginPage.typePassword('invalid{enter}');

        loginPage.elements.errorMessage().should('contain', "email or password is invalid");
    });

    it('Verify if navigates to #/ on successful login', () => {
        loginPage.typeEmail(user.email);
        loginPage.typePassword(`${user.password}{enter}`);
        // Same case as with register. We don't add assertions about home page. Because this is login spec.
        // All we care about is login page
        cy.verifyUrl('#/');
    });
});