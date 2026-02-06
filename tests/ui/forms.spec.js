import { test, expect } from '@playwright/test';
import { FormsPage } from '../../pages/forms.page';
import { validLoginUser , invalidMobileUser } from '../../utils/test-data';

test.describe('Practice Form test', () => {

    test('Submit form with valid mandatory data', async ({ page }) => {
        const formPage = new FormsPage(page);

        await formPage.openForm();
        await formPage.fillMandatoryFields(validLoginUser);
        await formPage.submitForm();

        await expect(formPage.modalTitle).toHaveText('Thanks for submitting the form');
    })

    test('Submit form with invalid mobile should not succeed', async ({ page }) => {
        const formPage = new FormsPage(page);

        await formPage.openForm();
        await formPage.fillMandatoryFields(invalidMobileUser);
        await formPage.submitForm();

        await expect(formPage.modalTitle).not.toBeVisible();
    })

    test('Mobile number with 9 digits should be invalid', async ({ page }) => {
        const formPage = new FormsPage(page);

        await formPage.openForm();
        await formPage.fillMandatoryFields({
            firstName: "Test",
            lastName: 'User',
            mobile: '123456789'
        });
        await formPage.submitForm();

        await expect(formPage.modalTitle).not.toBeVisible();
    })
})


test.describe('Practice form - Checkbox interactions', () => {
    test('User can select hobies checkboxes', async ({ page }) => {
        const formPage = new FormsPage(page);

        await formPage.openForm();
        await formPage.fillMandatoryFields(validLoginUser);
        await formPage.hobbySports.click();
        await formPage.hobbyReading.click();
        await formPage.submitForm();

        await expect(page.locator('td:has-text("Sports, Reading")')).toBeVisible();

    })
})

test.describe('Practice Form - Dropdown interactions', () => {
    test('User can select state and city', async ({ page }) => {
        const formPage = new FormsPage(page);
        await formPage.openForm();
        await formPage.fillMandatoryFields(validLoginUser);

        await formPage.stateDropdown.click();
        await page.locator('#react-select-3-option-0').click();

        await formPage.cityDropdown.click();
        await page.locator('#react-select-4-option-0').click();

        await formPage.submitForm();

        await expect(page.locator('td:has-text("NCR Delhi")')).toBeVisible();

    })
});