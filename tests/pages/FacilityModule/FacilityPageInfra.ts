import { Locator, Page, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class FacilityPageInfra {
  readonly page: Page;
  readonly loginPage: LoginPage;

  // Module Locators
  readonly hamburgerMenu: Locator;
  readonly masterModule: Locator;
  readonly facilityMaster: Locator;
  readonly facilityManagement: Locator;
  readonly masterButton: Locator;
  readonly addInfra: Locator;
  readonly inputInfra: Locator;
  readonly rightButtonInfra: Locator;
  readonly submitButtonInfra: Locator;
  readonly errorforWithoutFacilityName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);

    // Dashboard/Facility elements
    this.hamburgerMenu = page.locator("//*[name()='path' and contains(@d,'M3 18h18v-')]");
    this.masterModule = page.getByText('MASTERS', { exact: true });
    this.facilityMaster = page.locator('span:has-text("Facility Master")');
    this.facilityManagement = page.locator('span').filter({ hasText: 'Facility Management' }).last();
    this.masterButton = page.getByRole('button', { name: 'Masters' });
    this.addInfra = page.getByRole('button', { name: 'Add' });
    this.inputInfra = page.getByRole('textbox');
    this.rightButtonInfra = page.locator('div.d-flex.justify-content-end.gap-3 svg').first();
    this.submitButtonInfra = page.locator('button:has-text("CONFIRM")');
    this.errorforWithoutFacilityName = page.getByText('Infrastructure Name is required!', { exact: true });
  }

  /**
   * Registers the background popup handler for update alerts
   */
  async setupPopupHandler() {
    await this.page.addLocatorHandler(
      this.page.getByText('ESPro Update Available', { exact: true }),
      async () => {
        console.log('⚠️ Random ESPro Update Popup detected! Automating bypass...');
        await this.page.getByRole('button', { name: 'Refresh Later' }).click();
      }
    );
  }

  /**
   * Reusable navigation helper to reach the Facility Management module
   */
  async navigateToFacilityManagement() {
    // Rely on Playwright's built-in auto-waiting instead of fixed waitForTimeout(3000)
    await this.hamburgerMenu.click();
    await this.masterModule.waitFor({state:'visible'});
    await this.masterModule.click();
    await this.facilityMaster.waitFor({state:'visible'});
    await this.facilityMaster.click();
    await this.facilityManagement.waitFor({state:'visible'});
    await this.facilityManagement.click();
    await this.masterButton.waitFor({state:'visible'});
    await this.masterButton.click();
    
    
  }

  /**
   * Successfully adds a new random infrastructure facility
   */
  async createRandomFacility() {
  //  await this.navigateToFacilityManagement();
  
    await this.addInfra.waitFor({state:'visible'});
    await this.addInfra.click();
    // Fill data
    const randomValue = `Project_${Math.random().toString(36).substring(2, 7)}`;
    await this.inputInfra.fill(randomValue);

    // Click right checkmark/arrow button
    await this.rightButtonInfra.click();

    // Confirm submission
    await this.submitButtonInfra.waitFor({ state: 'visible' });
    await this.submitButtonInfra.click();
  }

  /**
   * Verifies validation when trying to submit an empty infrastructure name
   */
  async verifyEmptyFacilityNameError() {
    await this.navigateToFacilityManagement();
     await this.addInfra.waitFor({state:'visible'});
    await this.addInfra.click();
    // Trigger error by immediately clicking next without filling data
    await this.rightButtonInfra.click();
    
    // Assert the validation error is visible
    await expect(this.errorforWithoutFacilityName).toBeVisible();
  }
}