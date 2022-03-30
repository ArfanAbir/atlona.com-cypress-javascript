/// <reference 
import LoginPage from '../../Locator/pageObject.js';


describe('ATLONA Home Page Toggle Bar ', async () => {
    it('Should Toggle and Back To Home Page Again', async () => {
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
        login.toggleHome()
        cy.title().should('be.equal', 'Atlona Velocity | Dashboard');
    });
});