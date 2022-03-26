/// <reference types="Cypress" />

import homePage from '../../page-objects/home-page';

describe('Article list', () => {

    describe('not logged user', () => {

        beforeEach(() => {
            homePage.navigate();
            // mock.getArticles('empty-body')
            // mock.getArticles(statusCode:500, body:'500-status-code')
            // mock.getArticles('10-articles')
            // mock.getArticles('11-articles')
            // mock.getArticles('21-articles')
        });

        it('should display "Global Feed" tab', () => {
            homePage.elements.globalFeedTab().should('be.visible');
        });

        it('should not display "Your Feed" tab', () => {
            homePage.elements.yourFeedTab().should('not.be.visible');
        });

        it('should redirect to Sign up page when user click on like button', () => {
            homePage.clickLikeButton(0);
            cy.verifyUrl('#/register');
        });

        it('should display message when there is no articles in "Global Feed" tab', () => {
            homePage.elements.articleList()
                .contains('Loading articles...')
                .should('be.visible');

            cy.intercept({ method: 'GET', url: '*/articles*' }, { fixture: 'empty-body.json' }).as('getArticles');
            cy.wait('@getArticles');

            homePage.elements.articleList()
                .contains('No articles are here... yet.')
                .should('be.visible');
        });

        it('should redirect to article details by clicking on article title', () => {

        });

        it('should redirect to article details by clicking on "Read more..."', () => {

        });

        it('should display message on 500 status code', () => {
            cy.intercept({ method: 'GET', url: '*/articles*' }, { statusCode: 500 }).as('getArticles');
            cy.wait('@getArticles');
        });

        it('should not display pagination when there is 10 articles', () => {

        });

        it('should display pagination when there is 11 articles', () => {

        });

        it('should be able to use pagination', () => {

        });

    });

    describe('logged user', () => {

        beforeEach(() => {

        });

        it('should display "Global Feed" and "Your Feed" tab', () => {

        });

        it('should display message where there is no articles in "Your Feed" tab', () => {

        });

        it('should be able to like article', () => {

        });
    });
});