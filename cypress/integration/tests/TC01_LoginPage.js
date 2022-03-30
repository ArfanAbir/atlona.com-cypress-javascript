/// <reference 
import LoginPage from '../Locator/pageObject';


describe('ATLONA Login Page ', async () => {
    it('Should Open ATLONA Login Page', async () => {
        const login = new LoginPage();
        login.visit()
        cy.title().should('be.equal', 'Atlona Velocity | Login To The System');

    });
});