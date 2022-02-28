import user from '../fixtures/user-existing.json'

const baseApiUrl = Cypress.config('baseApiUrl');

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: `${baseApiUrl}/users/login`,
        body: {
            user: {
                email: user.email,
                password: user.password
            }
        }
    }).then((res) => {
        expect(res.status).to.eql(200);
        window.localStorage.setItem('jwtToken', res.body.user.token);
    })
});

Cypress.Commands.add('verifyUrl', (url) => {
    cy.hash().should('eq', url);
})