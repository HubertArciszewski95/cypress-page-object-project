/// <reference types="Cypress" />

class homePage {

    elements = {
        globalFeedTab: () => cy.get('.nav-link').contains('Global Feed'),
        yourFeedTab: () => cy.get('.nav-link').contains('Your Feed'),
        articlesLoadingMessage: () => cy.get('article-list').contains('Loading articles...'),
        noArticlesMessage: () => cy.get('article-list').contains('No articles are here... yet.'),
        article: (index) => cy.get('[article=article] .article-preview').eq(index),
        articleTitle: (title) => cy.get('[article=article] .article-preview h1').contains(title),
        readMoreButton: (index) => cy.get('[article=article] .article-preview .preview-link').eq(index).contains('Read more...'),
        likeButton: (index) => cy.get('favorite-btn').eq(index),
        pagination: () => cy.get('.pagination'),
        page: (page) => cy.get('.pagination li').eq(page - 1),
    }

    navigate() {
        cy.visit('#/');
    }

    clickLikeButton(index) {
        this.elements.likeButton(index).click();
    }

    clickReadMoreButton(index) {
        this.elements.readMoreButton(index).click();
    }

    clickArticleTitle(articleTitle) {
        this.elements.articleTitle(articleTitle).click();
    }

    selectPage(page) {
        this.elements.page(page).find('.page-link').click();
    }
}
export default new homePage();