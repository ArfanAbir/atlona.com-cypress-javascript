/// <reference 
import LoginPage from '../../Locator/pageObject.js';


describe('ATLONA Toggle Page ', async () => {
    it('Should Open The Toggle Service Page', async () => {
        const login = new LoginPage();
        login.visit()
        cy.title().should('be.equal', 'Atlona Velocity | Login To The System');
        login.fillemail("asif.rouf@atlona.com");
        login.fillPassword("Asdfghqwerty#12");
        login.loginSubmit();
        cy.wait(2000);
        cy.title().should('be.equal', 'Atlona Velocity | Dashboard');
        login.Toggle()
        cy.wait(2000)
        login.toggleService()
        cy.wait(2000)
        cy.title().should('be.equal', 'Atlona Velocity | Services');
    });
});