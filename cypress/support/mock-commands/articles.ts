/// <reference types="Cypress" />


class MockArticles {

    getArticles(fixtureFile: string, statusCode: number = 200, offset: string = '0') {
        cy.intercept(
            {
                method: 'GET',
                url: '**/articles*',
                query: {
                    limit: '10',
                    offset: offset
                }
            },
            {
                statusCode: statusCode,
                fixture: fixtureFile
            }).as('getArticles');

        cy.wait('@getArticles');
    }

}

export default MockArticles;