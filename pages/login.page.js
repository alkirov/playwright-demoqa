import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.username = page.locator('#userName');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login');
        this.erroMsg = page.locator('#name');

    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}