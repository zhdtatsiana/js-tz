/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */
class PageBlock {
    constructor(element) {
        this.element = element;
    }
    viewBlock() {
        return `Block is = ${this.element}`;
    }
}
class Page {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    viewBaseUrl() {
        return `Base url is = ${this.baseUrl}`;
    }
    get header() {
        return new PageBlock('header');
    }
    get sideBar() {
        return new PageBlock('side bar');
    }
    open() {
        return `Opened ${this.baseUrl}${this.path}`;
    }
}

class LoginPage extends Page {
    constructor(baseUrl, path) {
        super(baseUrl);
        this.path = path;
    }
    get emailField() {
        return `Email Field`;
    }
    get passwordField() {
        return `Password Field`;
    }
    get loginButton() {
        return `Login Button`;
    }
    get forgetPasswordLink() {
        return `Forget Password Link`;
    }
    typeEmail(email) {
        return `Added ${email} to ${this.emailField}`;
    }
    typePassword(password) {
        return `Added ${password} to ${this.passwordField}`;
    }
    clickLoginButton() {
        return `Clicked ${this.loginButton}`;
    }
    clickForgetPasswordLink() {
        return `Clicked ${this.forgetPasswordLink}`;
    }
}

const loginPage = new LoginPage('https://team-envs-project404-1-apps.workhumandev.com/whct-signup/#!', '/login');
console.log(loginPage)
console.log(loginPage.open());
console.log(loginPage.header.viewBlock());
console.log(loginPage.sideBar.viewBlock());
console.log(loginPage.typeEmail('1@test.com'));
console.log(loginPage. typePassword('password1'));
console.log(loginPage.clickLoginButton());
console.log(loginPage.clickForgetPasswordLink());