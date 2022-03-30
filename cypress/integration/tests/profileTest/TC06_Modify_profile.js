/// <reference 
import LoginPage from '../../Locator/pageObject.js';


describe('ATLONA Profile Page ', async () => {
    it('Should Open Modify Account Page from Profile Icon', async () => {
        const login = new LoginPage();
        login.visit()
        cy.title().should('be.equal', 'Atlona Velocity | Login To The System');
        login.fillemail("asif.rouf@atlona.com");
        login.fillPassword("Asdfghqwerty#12");
        login.loginSubmit();
        cy.wait(2000);
        cy.title().should('be.equal', 'Atlona Velocity | Dashboard');
        login.profileIcon();
        cy.wait(2000)
        login.modifyFormProfile()
        cy.wait(2000)
        cy.title().should('be.equal', 'Atlona Velocity | Modify Account')
      
    });
});