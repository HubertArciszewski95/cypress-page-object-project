/// <reference types="Cypress" />

import HomePage from '../../page-objects/home-page';
import Mock from '../../support/mock-commands/mock'

describe('Article list', () => {
    const homePage = new HomePage();
    const mock = new Mock();

    describe('not logged user', () => {

        beforeEach(() => {
            homePage.navigate();
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

        it.only('should display message when there is no articles in "Global Feed" tab', () => {
            homePage.elements.articlesLoadingMessage().should('be.visible');
            mock.articles.getArticles('empty-body.json');
            
            homePage.elements.noArticlesMessage().should('be.visible');
        });

        it('should redirect to article details by clicking on article title', () => {
            homePage.clickArticleTitle('Create a new implementation');
            cy.verifyUrl('#/article/Create-a-new-implementation-1');
        });

        it('should redirect to article details by clicking on "Read more..."', () => {
            homePage.clickReadMoreButton(1);
            cy.verifyUrl('#/article/Explore-implementations-1');
        });

        it('should display message on 500 status code', () => {
            mock.articles.getArticles('articles/500-error.json', 500);
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

    describe('pagination', () => {

        beforeEach(() => {
            homePage.navigate();
        });

        it.only('should not display pagination when there is 10 articles', () => {
            mock.articles.getArticles('articles/10-articles.json');
            homePage.elements.pagination().should('not.be.visible');
        });

        it.only('should display pagination when there is 11 articles', () => {
            mock.articles.getArticles('articles/11-articles-page1.json');
            homePage.elements.pagination().should('be.visible');
        });

        it.only('should be able to use pagination', () => {
            mock.articles.getArticles('articles/11-articles-page1.json');
            homePage.elements.page(1).should('have.class', 'active');
            homePage.elements.page(2).should('not.have.class', 'active');

            homePage.selectPage(2);
            mock.articles.getArticles('articles/11-articles-page2.json', 200, '10');

            homePage.elements.page(1).should('not.have.class', 'active');
            homePage.elements.page(2).should('have.class', 'active');
            homePage.elements.articleTitle('Mock article title 11').should('be.visible');
        });
    });

    describe('tags', () => {
        
        beforeEach(() => {
            homePage.navigate();
        });

        it('', () => {
            
        });
    });
});