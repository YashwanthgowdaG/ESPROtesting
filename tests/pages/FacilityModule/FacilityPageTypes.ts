import { Locator, Page, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { LoadFnOutput } from 'node:module'; 


export class FacilityPageTypes {
  readonly page: Page;
 readonly loginPage: LoginPage; 
 
  // Module Locators
  readonly hamburgerMenu: Locator;
  readonly masterModule: Locator;
  readonly facilityMaster: Locator;
  readonly facilityManagement: Locator;
  readonly masterButton: Locator;
  readonly TypesButton: Locator;
  readonly AddNewButton: Locator;
  readonly TypeInputName: Locator;
  readonly CategoryDropdown:Locator;
  readonly radiobuttonYes: Locator;
  readonly radiobuttonNo: Locator;
  readonly rightButton: Locator;
  readonly confirmButton:Locator;
  readonly dropdownoption:Locator;
  readonly TypenameError:Locator;
  readonly Xbutton:Locator;
  readonly deleteIcon:Locator;
  readonly deleteYesButton:Locator;
  readonly deleteOkButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);

    // Login page elements (from your snapshot)
  

    // Dashboard/Facility elements
    this.hamburgerMenu = page.locator("//*[name()='path' and contains(@d,'M3 18h18v-')]");
    this.masterModule =page.getByText('MASTERS', { exact: true });
    this.facilityMaster =page.locator('span:has-text("Facility Master")');;
    this.facilityManagement = page.locator('span').filter({ hasText: 'Facility Management' }).last();;
    this.masterButton = page.getByRole('button', { name: 'Masters' });
   this.TypesButton=page.getByText('Types', { exact: true });
   this.AddNewButton=page.getByRole('button', { name: 'Add' });
   this.TypeInputName=page.getByRole('textbox');
   this.CategoryDropdown=page.locator('div.css-19bb58m');
   this.radiobuttonYes= page.getByRole('radio', { name: 'Yes' });
   this.radiobuttonNo= page.getByRole('radio', { name: 'No' });
   this.rightButton=page.locator('.lucide.lucide-check');
   this.confirmButton= page.locator('button:has-text("CONFIRM")');
   this.dropdownoption=page.getByRole('option', { name: 'Academic' });
   this.TypenameError=page.getByText('Type Name is required!', { exact: true });
   this.deleteIcon=page.locator("//tbody/tr[2]/td[4]/div[1]/button[2]");
   this.deleteYesButton=page.getByText('YES', { exact: true });
   this.deleteOkButton=page.getByText('OK', { exact: true });
   this.Xbutton=page.locator(".lucide.lucide-x.text-danger.cursor-pointer");
   // Add these lines at the very end of your constructor:
    this.page.addLocatorHandler(
      this.page.getByText('ESPro Update Available', { exact: true }),
      async () => {
        console.log(' Random ESPro Update Popup detected! Automating bypass...');
        await this.page.getByRole('button', { name: 'Refresh Later' }).click();
      }
    );
} 
  async navigateToTypes() {
    // 1. Ensure we are logged in
    await this.loginPage.navigate();
    await this.loginPage.loginvalid('sreejith.l', 'Cdi@christ2026');
// Pauses for 3 seconds
    await this.page.waitForTimeout(3000);
    // 2. Open Menu and navigate
    await this.hamburgerMenu.waitFor({state:'visible'});
    await this.hamburgerMenu.click();
    await this.masterModule.waitFor({state:'visible'});
    await this.masterModule.click();
    await this.facilityMaster.waitFor({state:'visible'});
    await this.facilityMaster.click();
    await this.facilityManagement.waitFor({state:'visible'});
    await this.facilityManagement.click();
    await this.page.waitForTimeout(4000);
    await this.masterButton.waitFor({state:'visible'});
    await this.masterButton.click();
    await this.TypesButton.waitFor({state:'visible'});
    await this.TypesButton.click();

  }
  async createRandomTypes(){
    await this.AddNewButton.waitFor({state:'visible'});
    await this.AddNewButton.click();
    await this.TypeInputName.waitFor({state:'visible'});
    const randomType = `Class_${Math.random().toString(36).substring(2, 7)}`;
    await this.TypeInputName.fill(randomType);   
    await this.CategoryDropdown.waitFor({state:'visible'});
    await this.CategoryDropdown.click();
    await this.dropdownoption.waitFor({state:'visible'});
    await this.dropdownoption.click();
    await this.radiobuttonYes.click();
    await this.rightButton.click();
    await this.confirmButton.waitFor({state:'visible'});
    await this.confirmButton.click();   
  }

 async verifyEmptyTypeNameError(){
  await this.page.waitForTimeout(3000);
  await this.AddNewButton.waitFor({state:'visible'});
  await this.AddNewButton.click();
  await this.rightButton.waitFor({state:'visible'});
  await this.rightButton.click();
  await expect(this.TypenameError).toBeVisible();
  await this.Xbutton.waitFor({state:'visible'});
  await this.Xbutton.click();

 }
async DeleteTypes(){
  await this.page.waitForTimeout(3000);
  await this.deleteIcon.waitFor({state:'visible'});
  await this.deleteIcon.click();
  await this.deleteYesButton.waitFor({state:'visible'});
  await this.deleteYesButton.click();
  await this.deleteOkButton.waitFor({state:'visible'});
  await this.deleteOkButton.click();

}


}