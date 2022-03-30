/// <reference 
import LoginPage from '../../Locator/pageObject.js';


describe('ATLONA Profile Page ', async () => {
    it('Should Display The Role List in The Atlona Dashboard', async () => {
        const login = new LoginPage();
        login.visit()
        cy.title().should('be.equal', 'Atlona Velocity | Login To The System');
        login.fillemail("asif.rouf@atlona.com");
        login.fillPassword("Asdfghqwerty#12");
        login.loginSubmit();
        cy.wait(2000);
        cy.title().should('be.equal', 'Atlona Velocity | Dashboard');
        cy.wait(2000)
        login.profileIcon()
        cy.wait(2000)
        login.userprofile()
        cy.title().should('be.equal', 'Atlona Velocity | User Profile');
        cy.wait(2000)
        login.roleList()
        cy.title().should('be.equal', 'Atlona Velocity | Role List');
    });
});