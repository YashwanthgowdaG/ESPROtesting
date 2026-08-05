import { Locator, Page, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class FacilityPageCategory {
  readonly page: Page;
 readonly loginPage: LoginPage; 
 
  // Module Locators
  readonly hamburgerMenu: Locator;
  readonly masterModule: Locator;
  readonly facilityMaster: Locator;
  readonly facilityManagement: Locator;
  readonly masterButton: Locator;
  readonly CategoryButton:Locator;
  readonly AddNewButton : Locator;
  readonly InputBox: Locator;
  readonly colourcode: Locator;
  readonly rightbutton:Locator;
  readonly submitbutton: Locator;
  readonly colorCodeError: Locator;
  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);

    // Login page elements (from your snapshot)
  

    // Dashboard/Facility elements
    this.hamburgerMenu = page.locator("//*[name()='path' and contains(@d,'M3 18h18v-')]");
    this.masterModule =page.getByText('MASTERS', { exact: true });
    this.facilityMaster = page.locator('span:has-text("Facility Master")');
    this.facilityManagement = page.locator('span').filter({ hasText: 'Facility Management' }).last();;
    this.masterButton = page.getByRole('button', { name: 'Masters' });
    this.CategoryButton= page.getByRole('button', { name: 'Categories' });
    this.AddNewButton=  page.getByRole('button', { name: 'Add' });
    this.InputBox=  page.locator('input.form-control.form-control-sm.w-75');
    this.colourcode= page.getByRole('textbox', { name: '#000000' });
    this.rightbutton= page.locator('div.d-flex.justify-content-end.gap-3').locator('svg').nth(0);
    this.submitbutton= page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)");
    this.colorCodeError=page.getByText('Color Code is required!', { exact: true });


  this.page.addLocatorHandler(
      this.page.getByText('ESPro Update Available', { exact: true }),
      async () => {
        console.log('⚠️ Random ESPro Update Popup detected! Automating bypass...');
        await this.page.getByRole('button', { name: 'Refresh Later' }).click();
      }
    );
  } 
  async navigateToCategory() {
    // 1. Ensure we are logged in
    await this.loginPage.navigate();
    await this.loginPage.loginvalid('sreejith.l', 'Cdi@christ2026');
    // 2. Open Menu and navigate
    await this.hamburgerMenu.waitFor({state:'visible'});
    await this.hamburgerMenu.click();
    await this.masterModule.waitFor({state:'visible'});
    await this.masterModule.click();
    await this.facilityMaster.waitFor({state:'visible'});
    await this.facilityMaster.click();
    await this.facilityManagement.waitFor({state:'visible'});
    await this.facilityManagement.click();
    await this.masterButton.waitFor({state:'visible'});
    await this.masterButton.click();
    await this.CategoryButton.waitFor({state:'visible'})
    await this.CategoryButton.click();

  }

  async createRandomCategory(){

    await this.AddNewButton.waitFor({state:'visible'})
    await this.AddNewButton.click();
    
    // 3. Fill data
    const randomCategory = `Project_${Math.random().toString(36).substring(2, 7)}`;
    await this.InputBox.fill(randomCategory);

    const randomcolourcode = `#${Math.random().toString(36).substring(2, 7)}`;
    await this.colourcode.fill(randomcolourcode);
    // 4. Submit
    await this.rightbutton.waitFor({state:'visible'});
    await this.rightbutton.click();
    await this.submitbutton.waitFor({ state: 'visible' });
    await expect(this.submitbutton).toBeVisible();
  
    await this.submitbutton.click();    
   
  }
async verifyEmptyColorCodeError(){
   await this.AddNewButton.waitFor({state:'visible'})
    await this.AddNewButton.click();
    const randomCategory = `Project_${Math.random().toString(36).substring(2, 7)}`;
    await this.InputBox.fill(randomCategory);
    await this.rightbutton.waitFor({state:'visible'});
    await this.rightbutton.click();
    await expect(this.colorCodeError).toBeVisible();


}

}