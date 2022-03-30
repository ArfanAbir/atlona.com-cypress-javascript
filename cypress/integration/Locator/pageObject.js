/// <reference types="Cypress" />
const Page = require('../Page/Page.js');

class LoginPage extends Page{


fillemail(value){
         const email = cy.get("[id='username']")
         email.clear()
         email.type(value)
         return this
}


fillPassword(pass){
    const password = cy.get("[id='password']")
    password.clear()
    password.type(pass)
    return this
}


loginSubmit(){
    const submitBtn = cy.get("[id='loginbutton']")
    submitBtn.click()
    return this
}

profileIcon(){
    const profile = cy.get("[id='userProfileSettingsDropdown']")
    profile.click()
    return this
}

userprofile(){
    const userprofile = cy.get("[id='userProfileButton']")
    userprofile.click()
    return this
}

Accounts(){
    const accounts = cy.xpath("//body/div[@id='innerBodyDiv']/div[3]/main[1]/div[1]/div[1]/span[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/div[1]/button[1]/div[1]/div[1]");
    accounts.click()
    return this
}

dealerAccounts(){
    const dealer = cy.xpath("//body/div[@id='innerBodyDiv']/div[3]/main[1]/div[1]/div[1]/span[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/div[1]/button[2]/div[1]/div[1]/span[1]");
    dealer.click();
    return this
}

customerAccounts(){
    const customer = cy.xpath("//body/div[@id='innerBodyDiv']/div[3]/main[1]/div[1]/div[1]/span[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/div[1]/button[3]/div[1]/div[1]");
    customer.click();
    return this
}

modifyAccount(){
    const modifyAccount = cy.xpath("//body/div[@id='innerBodyDiv']/div[3]/main[1]/div[1]/div[1]/span[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/div[1]/button[4]/div[1]/div[1]");
    modifyAccount.click();
    return this
}
modifyFormProfile(){
    const modify = cy.get("[id='accountListButton']")
    modify.click()
    return this
}

userlist(){
    const userlist = cy.xpath("//body/div[@id='innerBodyDiv']/div[3]/main[1]/div[1]/div[1]/span[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/div[1]/button[5]/div[1]/div[1]");
    userlist.click()
    return this
}

roleList(){
    const role = cy.xpath("//body/div[@id='innerBodyDiv']/div[3]/main[1]/div[1]/div[1]/span[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/div[1]/button[6]/div[1]/div[1]");
    role.click();
    return this
}

logoutButton(){
    const logout = cy.get("[id='logoutButton']")
    logout.click();
    return this
}

Toggle(){
    const toggleBar = cy.xpath("//body/div[@id='innerBodyDiv']/div[@id='Atlona-banner']/div[1]/nav[1]/div[2]/div[1]/ul[1]/li[1]/a[1]/i[1]");
    toggleBar.click();
    return this
}
toggleHome(){
    const home = cy.xpath("//b[contains(text(),'Home')]");
    home.click();
    return this
}


toggleService(){
    const service = cy.xpath("//body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[3]/a[1]/span[1]");
    service.click();
    return this
}

toggleLicences(){
    const license = cy.xpath("//body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[4]/a[1]/span[1]");
    license.click();
    return this
}

toggleOrders(){
    const orders = cy.xpath("//b[contains(text(),'Orders')]");
    orders.click();
    return this
}
toggleProduct(){
    const product = cy.xpath("//b[contains(text(),'Product Builds')]");
    product.click();
    return this
}

productVelocity(){
    const velocity = cy.xpath("//body/div[@id='innerBodyDiv']/div[3]/main[1]/div[1]/div[1]/span[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/button[1]/div[1]/div[1]");
    velocity.click();
    return this;
}

QATesting(){
    const qatesting = cy.xpath("//body/div[@id='innerBodyDiv']/div[3]/main[1]/div[1]/div[1]/span[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/button[2]/div[1]/div[1]");
    qatesting.click()
    return this
}







    visit(){
        return super.open()
        // cy.visit("https://vgw-cloud-dev-p52ulnuvqa-uc.a.run.app/#/")
    }


}

export default LoginPage