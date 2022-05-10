import user from '../../fixtures/user-existing.json'

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to login to the app by API.
         * @example cy.login();
         */
        login: typeof login
    }
}

const login = () => {
    cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login',
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
};

Cypress.Commands.addAll({ login });