import user from '../../fixtures/user-existing.json'

export const login = (): void => {
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

Cypress.Commands.add('login', login);