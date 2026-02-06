import { test, expect, request } from '@playwright/test';
import { validApiUser, weakPasswordUser } from '../../data/user.data';
import { API_ENDPOINTS } from '../../config/api.endpoints';


test.describe('User API - Create User', () => {

    test('Creat user successfully', async ({ request }) => {
        const response = await request.post(
            API_ENDPOINTS.CREATE_USER,
            { data: validApiUser }
        );

        expect(response.status()).toBe(201);

        const body = await response.json();
        expect(body.username).toBe(validApiUser.userName);
        expect(body.userID).toBeDefined();
    })

    test('Create user fails with weak password', async ({ request }) => {
        const response = await request.post(
            API_ENDPOINTS.CREATE_USER,
            { data: weakPasswordUser }
        );

        expect(response.status()).toBe(400);

        const body = await response.json();
        expect(body.message).toContain('Passwords must have at least one non alphanumeric character, one digit (\'0\'-\'9\'), one uppercase (\'A\'-\'Z\'), one lowercase (\'a\'-\'z\'), one special character and Password must be eight characters or longer.');
    })

    test('Create user fails with duplicate username', async ({ request }) => {
        const user = {
            userName: `user_${Date.now()}`,
            password: 'Password123!'
        };

        await request.post(API_ENDPOINTS.CREATE_USER,
            { data: user }
        );
        const response = await request.post(API_ENDPOINTS.CREATE_USER,
            { data: user }
        );

        expect(response.status()).toBe(406);
    })
})