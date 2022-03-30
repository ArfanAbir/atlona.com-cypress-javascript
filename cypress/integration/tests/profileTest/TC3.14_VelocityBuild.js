/// <reference 
import LoginPage from '../../Locator/pageObject.js';


describe('ATLONA Product Builds ', async () => {
    it('Should open Velocity Builds Page', async () => {
        const login = new LoginPage();
        login.visit();
        cy.title().should('be.equal', 'Atlona Velocity | Login To The System');
        login.fillemail("asif.rouf@atlona.com");
        login.fillPassword("Asdfghqwerty#12");
        login.loginSubmit();
        cy.wait(2000);
        cy.title().should('be.equal', 'Atlona Velocity | Dashboard');
        login.Toggle();
        cy.wait(2000);
        login.toggleProduct();
        cy.wait(2000)
        login.productVelocity()
        cy.title().should('be.equal', 'Atlona Velocity | Builds');
    });
});