/// <reference types="Cypress" />

class homePage {

    elements = {
        globalFeedTab: () => cy.get('.nav-link').contains('Global Feed'),
        yourFeedTab: () => cy.get('.nav-link').contains('Your Feed'),
        articleList: () => cy.get('article-list'),
        likeButton: (index) => cy.get('favorite-btn').eq(index),

    }
    
    navigate() {
        cy.visit('#/');
    }

    clickLikeButton(index) {
        this.elements.likeButton(index).click();
    }

    clickReadMore(articleTitle) {
        
    }

    clickArticleTitle(articleTitle) {

    }
}
export default new homePage();