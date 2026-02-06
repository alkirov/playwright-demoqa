import { test, expect, request } from '@playwright/test';
import { API_ENDPOINTS } from '../../config/api.endpoints';
import { LoginPage } from '../../pages/login.page';

test.describe('API & UI Login flow', () => {

    test('User created via API can login via UI', async ({ request, page }) => {

        //Step 1 create user via API
        const user = {
            userName: `user_${Date.now()}`,
            password: 'Password123!'
        };

        const createResponse = await request.post(
            API_ENDPOINTS.CREATE_USER,
            { data: user }
        )

        expect(createResponse.status()).toBe(201);

        //Step 2 Login via UI
        const loginPage = new LoginPage(page);

        await loginPage.open('/login');
        await loginPage.login(user.userName, user.password);

        //Step 3 Asert successful Login
        await expect(page).toHaveURL('/profile');
    });
});