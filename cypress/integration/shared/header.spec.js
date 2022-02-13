/// <reference types="Cypress" />

import homePage from '../../page-objects/home-page';
import header from '../../page-objects/components/header-component'

import user from '../../fixtures/user-existing.json'


describe('Header', () => {
    describe('not logged user', () => {

        beforeEach(() => {
            homePage.navigate();
        });

        it('Verifi if welcome banner is displayed', () => {
            header.elements.welcomeBanner().contains('conduit');
            header.elements.welcomeBanner().contains('A place to share your knowledge.');
        });

        // Need to check visibility, because nav elements for logged user
        // exist in DOM even if user is not logged, but they are not visible
        it('Verify if "Home" is displayed and links to #/', () => {
            header.elements.navLink()
                .contains('Home')
                .should('be.visible')
                .should('have.attr', 'href', '#/');
        });

        it('Verify if "Sign in" is displayed links to #/login', () => {
            header.elements.navLink()
                .contains('Sign in')
                .should('be.visible')
                .should('have.attr', 'href', '#/login');
        });

        it('Verify if "Sign up" is displayed and links to #/register', () => {
            header.elements.navLink()
                .contains('Sign up')
                .should('be.visible')
                .should('have.attr', 'href', '#/register');
        });
    });

    describe('logged user', () => {

        beforeEach(() => {
            cy.login();
            homePage.navigate();
        });

        it('Verify if "Home" is displayed and links to #/', () => {
            // eq(3) because first home navLink element is for not logged user.
            // Third element is home navLink for logged user.
            header.elements.navLink().eq(3)
                .contains('Home')
                .should('be.visible')
                .should('have.attr', 'href', '#/');
        });

        it('Verify if "New Article" is displayed and links to #/editor/', () => {
            header.elements.navLink()
                .contains('New Article')
                .should('be.visible')
                .should('have.attr', 'href', '#/editor/');
        });

        it('Verify if "Settings" is displayed and links to #/settings', () => {
            header.elements.navLink()
                .contains('Settings')
                .should('be.visible')
                .should('have.attr', 'href', '#/settings');
        });

        it('Verify if profile header is displayed and match logged user', () => {
            header.elements.navLink()
                .contains(user.username)
                .should('be.visible')
                .should('have.attr', 'href', `#/@${user.username}`);
        });
    });

});