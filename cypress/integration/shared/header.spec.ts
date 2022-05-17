/// <reference types="Cypress" />

import HomePage from '../../page-objects/home-page';
import Header from '../../page-objects/components/header'

import user from '../../fixtures/user-existing.json'


describe('Header', () => {
    const homePage = new HomePage();
    const header = new Header();

    describe('not logged user', () => {

        beforeEach(() => {
            homePage.navigate();
        });

        it('should display welcome banner', () => {
            header.elements.welcomeBanner()
                .should('be.visible')
                .and('contain', 'conduit')
                .and('contain', 'A place to share your knowledge.');
        });

        // Need to check visibility, because nav elements for logged user
        // exist in DOM even if user is not logged, but they are not visible
        it('should display "Home" and links to #/', () => {
            header.elements.navLink()
                .contains('Home')
                .should('be.visible')
                .should('have.attr', 'href', '#/');
        });

        it('should display "Sign in" and links to #/login', () => {
            header.elements.navLink()
                .contains('Sign in')
                .should('be.visible')
                .should('have.attr', 'href', '#/login');
        });

        it('should display "Sign up" and links to #/register', () => {
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

        it('should display "Home" and links to #/', () => {
            // eq(3) because first home navLink element is for not logged user.
            // Third element is home navLink for logged user.
            header.elements.navLink().eq(3)
                .contains('Home')
                .should('be.visible')
                .should('have.attr', 'href', '#/');
        });

        it('should display "New Article" and links to #/editor/', () => {
            header.elements.navLink()
                .contains('New Article')
                .should('be.visible')
                .should('have.attr', 'href', '#/editor/');
        });

        it('should display "Settings" and links to #/settings', () => {
            header.elements.navLink()
                .contains('Settings')
                .should('be.visible')
                .should('have.attr', 'href', '#/settings');
        });

        it(`should display "${user.username}" profile username and links to author details`, () => {
            header.elements.navLink()
                .contains(user.username)
                .should('be.visible')
                .should('have.attr', 'href', `#/@${user.username}`);
        });
    });

});