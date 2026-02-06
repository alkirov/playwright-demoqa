import { BasePage } from "./base.page";

export class FormsPage extends BasePage {
    constructor(page) {
        super(page);

        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail');
        this.genderMale = page.locator('label[for="gender-radio-1"]');
        this.mobile = page.locator('#userNumber');
        this.submitBtn = page.locator('#submit');
        this.hobbySports = page.locator('label[for="hobbies-checkbox-1"]');
        this.hobbyReading = page.locator('label[for="hobbies-checkbox-2"]');
        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');

        this.modalTitle = page.locator('#example-modal-sizes-title-lg');
    }

    async openForm() {
        await this.open('/automation-practice-form');
    }

    async fillMandatoryFields(data) {
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.genderMale.click();
        await this.mobile.fill(data.mobile);
    }

    async submitForm() {
        await this.submitBtn.click();
    }
}