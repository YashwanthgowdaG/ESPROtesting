// ...existing code...
import { Locator, Page, expect } from '@playwright/test';
import { Student_login } from './Student_appln_login';

export class UG_appln {
  readonly page: Page;
  readonly newApplication: Locator;
  readonly ApplicationforDropdown: Locator;
  readonly UG_option: Locator;
  readonly Student_login: Student_login;
  readonly apply: Locator;
  readonly okButton: Locator;
  readonly preferenceLabels: Locator;
  readonly preferedLocation1: Locator;
  readonly locationBCC: Locator;
  readonly uploadphoto: Locator;
  readonly fileInput: Locator;
  readonly submitupload: Locator;
  readonly saveprocced: Locator;
  readonly termscheckbox: Locator;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;
  readonly checkbox3: Locator;
  readonly checkbox4: Locator;
  readonly saveprocced1: Locator;
  readonly saveproccedPersonaldetais: Locator;
  readonly uploadMarkscard1: Locator;
  readonly submitfile1: Locator;
  readonly submitfile2: Locator;
  readonly dropfile2: Locator;
  readonly confirmButton: Locator;
  readonly confirmpopup: Locator;
  readonly datedropdown: Locator;
  readonly selectDate: Locator;
  readonly selectCampus: Locator;
  readonly checkboxforselection: Locator;

  // payment
  readonly checkboxpayment: Locator;
  readonly paybutton: Locator;
  readonly internetbankingbutton: Locator;
  readonly selectBank: Locator;
  readonly makepaymentbutton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Student_login = new Student_login(page);

    this.newApplication = page.getByText('NEW APPLICATION', { exact: true });
    this.ApplicationforDropdown = page.getByRole('combobox', { name: 'Application For *' });
    this.UG_option = page.getByRole('option', { name: 'Under Graduate Degree' });
    this.apply = page.getByRole('button', { name: 'Apply Now' }).first();
    this.preferenceLabels = page.locator('div label:has-text("Programme Preference")');
    this.okButton = page.getByRole('button', { name: 'OK' });
    this.preferedLocation1 = page.getByRole('combobox', { name: 'Preferred Location/Campus *' });
    this.locationBCC = page.getByRole('option', { name: 'BANGALORE CENTRAL CAMPUS' });
    this.uploadphoto = page.getByLabel('Upload & View');
    this.fileInput = page.locator('input.uppy-DragDrop-input');
    this.submitupload = page.getByRole('button', { name: 'Submit' });
    this.saveprocced = page.locator(':text("SAVE & PROCEED")');
    this.termscheckbox = page.locator("//div[@class='container-fluid']//label[1]//span[1]//input[1]");
    this.checkbox1 = page.getByRole('checkbox', { name: 'I have a valid Credit card/' });
    this.checkbox2 = page.getByRole('checkbox', { name: 'I will Upload original' });
    this.checkbox3 = page.getByRole('checkbox', { name: 'I have read and agreed to the' });
    this.checkbox4 = page.getByRole('checkbox', { name: 'Students joining this' });
    this.saveprocced1 = page.locator(':text("SAVE & PROCEED")');
    this.saveproccedPersonaldetais = page.locator(':text("SAVE & PROCEED")');
    this.uploadMarkscard1 = page.getByLabel('Upload & View').first();

    this.submitfile1 = page.getByRole('button', { name: 'Submit' });
    this.submitfile2 = page.getByRole('button', { name: 'Submit' });
    this.dropfile2 = page.locator('input.uppy-DragDrop-input');

    this.confirmButton = page.locator("//span[normalize-space()='I Confirm']");
    this.confirmpopup = page.getByRole('button', { name: 'Confirm' });
    this.datedropdown = page.getByRole('button', { name: 'Open' });
    this.selectDate = page.getByRole('option', { name: '/Aug/2026' });
    this.selectCampus = page.getByRole('button', { name: 'Available' });
    this.checkboxforselection = page.getByRole('checkbox').nth(1);

    this.checkboxpayment = page.getByRole('checkbox', { name: 'controlled' });
    this.paybutton = page.getByRole('button', { name: 'Pay Now' });
    this.internetbankingbutton = page.locator('iframe[name="response-frame"]').contentFrame().getByText('Internet Banking');
    this.selectBank = page.locator('iframe[name="response-frame"]').contentFrame().locator('.flex.items-center.justify-center');
    this.makepaymentbutton = page.locator('iframe[name="response-frame"]').contentFrame().getByRole('button', { name: 'Make Payment for ₹' });
  }

  async apply_first_ug_program_and_submit_profile() {
    await this.Student_login.navigate();
    await this.Student_login.loginvalid('317500testchristuniversity@gmail.com', 'christ@2022');

    await this.newApplication.click();
    await this.ApplicationforDropdown.click();
    await this.UG_option.click();

    await this.page.locator('button:has-text("APPLY NOW")').first().click();
    await this.page.waitForTimeout(2000);

    if (await this.okButton.isVisible()) {
      await this.okButton.click();
    }

    await this.page.waitForTimeout(1500);

    await this.preferedLocation1.click();
    await this.locationBCC.click();

    await this.selectFirstOptionForAllOtherPreferences();

    const fileInput = this.page.locator('input[type="file"], input.uppy-DragDrop-input').first();
    await fileInput.setInputFiles('c:/Automation/PWdemos/tests/fixtures/profile.jpg');
    await this.page.waitForTimeout(1500);

    await this.page.locator('button:has-text("Submit")').last().click();
  }

  async selectFirstOptionForAllOtherPreferences() {
    const selects = this.page.locator('select');
    const count = await selects.count();

    for (let i = 1; i < count; i++) {
      const sel = selects.nth(i);
      if (await sel.isVisible()) {
        const optionCount = await sel.locator('option').count()  ;
        if (optionCount > 1) {
          await sel.selectOption({ index: 1 });
        } else if (optionCount === 1) {
          await sel.selectOption({ index: 0 });
        }
      }
    }
  }

  async uploadProfilePhoto(filePath: string) {
    await this.fileInput.waitFor({ state: 'attached' });
    await this.fileInput.setInputFiles(filePath);
    await this.page.waitForTimeout(1500);
  }
}