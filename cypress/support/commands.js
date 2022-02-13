import userDetails from '../fixtures/user-details.json'

const baseApiUrl = Cypress.config('baseApiUrl');

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: `${baseApiUrl}/users/login`,
        body: {
            user: {
                email: userDetails.email,
                password: userDetails.password
            }
        }
    }).then((resp) => {
        window.localStorage.setItem('jwtToken', resp.body.user.token);
    })
});

Cypress.Commands.add('verifyUrl', (url) => {
    cy.hash().should('eq', url);
})