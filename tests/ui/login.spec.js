import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.describe('Login page UI test', () => {

    test('All login elemnts are visible', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open('/login');

        await expect(loginPage.username).toBeVisible();
        await expect(loginPage.password).toBeVisible();
        await expect(loginPage.loginBtn).toBeVisible();
    });

    test('User can type into fields', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open('/login');

        await loginPage.username.fill('hello');
        await expect(loginPage.username).toHaveValue('hello');

        await loginPage.password.fill('world');
        await expect(loginPage.password).toHaveValue('world');

    });
})

test.describe('Login form behavior test', () => {

    test('All login elemnts are visible', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open('/login');

        await loginPage.login("'; DROP TABLE users; --", "pass");

        await expect(loginPage.erroMsg).toBeVisible();

    });
})

test.describe('Login functionality test', () => {

    test('Valid login redircets to profile page', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open('/login');
        await loginPage.login('testuser', 'Test@123');

        await expect(page).toHaveURL('/profile')
    })

    test('Invalid login shows error message', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open('/login');
        await loginPage.login('invalidUser', 'invalidPassowrd');

        await expect(loginPage.erroMsg).toBeVisible();
    })

    test('Login with empty credentels shows error message', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open('/login');
        await loginPage.login('', '');

        await expect(page).toHaveURL('/login');
    })
})