/// <reference 
import LoginPage from '../Locator/pageObject';


describe('ATLONA Login Page ', async () => {
    it('Should login into ATLONA Dashboard', async () => {
        const login = new LoginPage();
        login.visit()
        cy.title().should('be.equal', 'Atlona Velocity | Login To The System');
        login.fillemail("asif.rouf@atlona.com");
        login.fillPassword("Asdfghqwerty#12");
        login.loginSubmit();
        cy.wait(2000);
        cy.title().should('be.equal', 'Atlona Velocity | Dashboard');
    });
});