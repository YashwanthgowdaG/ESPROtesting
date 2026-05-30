import { Locator, Page, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class AddBlock {
  readonly page: Page;
 readonly loginPage: LoginPage; 
 
  // Module Locators
  readonly hamburgerMenu: Locator;
  readonly masterModule: Locator;
  readonly facilityMaster: Locator;
  readonly facilityManagement: Locator;
  readonly BlockMasterButton: Locator;
  readonly AddNewButton: Locator;
  readonly Campusoptions:Locator;
  readonly  SelectCampus: Locator;
  readonly BlockNameInput: Locator;
  readonly BlockOptions: Locator;
  readonly selectBlockIncharge: Locator;
  readonly SelectButton: Locator;
  readonly ITinchargeOption:Locator;
  readonly selectITincharge: Locator;
  readonly AddFloorButton: Locator;
  readonly floorNo: Locator;
  readonly FloorName:Locator;
  readonly saveBlockMasterButton: Locator;
  readonly YesButton: Locator;
  readonly OKButton:Locator;
  readonly SubmittedSuccesfully:Locator;
  readonly ErrorMessage:Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);

    // Login page elements (from your snapshot)
  

    // Dashboard/Facility elements
    this.hamburgerMenu = page.locator("//*[name()='path' and contains(@d,'M3 18h18v-')]");
    this.masterModule =page.getByText('MASTERS', { exact: true });
    this.facilityMaster =page.locator('span:has-text("Facility Master")');;
    this.facilityManagement =page.locator('span').filter({ hasText: 'Facility Management' }).last();;
    this.BlockMasterButton= page.getByRole('button', { name: 'Block & Floor Master' });
    this.AddNewButton=page.getByRole('button', { name: 'Add' });
    this.Campusoptions =page.locator('div.css-19bb58m');
    this.SelectCampus= page.getByRole('option', { name: 'BANGALORE CENTRAL CAMPUS' });
    this.BlockNameInput= page.getByRole('textbox', { name: 'e.g. Block A' });
    this.BlockOptions= page.getByRole('textbox', { name: 'Select Block Incharge(s)' });
    this.ITinchargeOption=page.getByRole('textbox', { name: 'Select IT Incharge(s)' });
    this.selectBlockIncharge= page.getByText('ABHAYA N B (145) (ENGLISH AND CULTURAL STUDIES)', { exact: true });
    this.selectITincharge=page.getByText('ABHINUSH D A (1869) (CENTRE FOR DIGITAL INNOVATION (CDI))', { exact: true });
    this.AddFloorButton= page.getByRole('button', { name: '+ Add Floor' });
    this.floorNo=page.getByPlaceholder('e.g. 1');
    this.FloorName= page.getByRole('textbox', { name: 'e.g. FIRST' });
    this.saveBlockMasterButton=page.getByRole('button', { name: 'Submit' });
    this.YesButton= page.locator('button:has-text("YES")');
    this.SelectButton= page.getByText('SELECT', { exact: true });
    this.SubmittedSuccesfully=page.getByText('Submitted successfully.', { exact: true });
   this.OKButton=page.getByText('OK', { exact: true });
   this.ErrorMessage=page.getByText('Please add at least one floor to the block!', { exact: true });
    this.page.addLocatorHandler(
      this.page.getByText('ESPro Update Available', { exact: true }),
      async () => {
        console.log('⚠️ Random ESPro Update Popup detected! Automating bypass...');
        await this.page.getByRole('button', { name: 'Refresh Later' }).click();
      }
    );

} 
  async NavigateToBlockMaster() {
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
    await this.BlockMasterButton.waitFor({state:'visible'});
    await this.BlockMasterButton.click();


  }
  async AddBlockMaster(){
    await this.AddNewButton.waitFor({state:'visible'});
    await this.AddNewButton.click();
    await this.Campusoptions.click();
    await this.SelectCampus.waitFor({state:'visible'});
    await this.SelectCampus.click();
    const randomBlockName = `Block${Math.random().toString(36).substring(2, 7)}`;
    await this.BlockNameInput.fill(randomBlockName);  

    await this.BlockOptions.click();
    await this.selectBlockIncharge.waitFor({state:'visible'});
    await this.selectBlockIncharge.dblclick();
    await this.SelectButton.waitFor({state:'visible'});
    await this.SelectButton.click();
    await this.ITinchargeOption.waitFor({state:'visible'});
    await this.ITinchargeOption.click();
    await this.selectITincharge.waitFor({state:'visible'});
    await this.selectITincharge.dblclick();
    await this.SelectButton.waitFor({state:'visible'});
    await this.SelectButton.click();
    await this.AddFloorButton.waitFor({state:'visible'});
    await this.AddFloorButton.click();
   
const floorno = Math.floor(Math.random() * 20) + 1; 
await this.floorNo.fill(`${floorno}`);
const FloorName = `Floor${floorno}`;
await this.FloorName.waitFor({state:'visible'});
await this.FloorName.fill(FloorName);
await this.saveBlockMasterButton.waitFor({state:'visible'});
await this.saveBlockMasterButton.click();
await this.page.waitForTimeout(3000);
await this.YesButton.waitFor({state:'visible'});
await expect(this.YesButton).toBeVisible();
await this.YesButton.click();
await expect(this.SubmittedSuccesfully).toBeVisible();
await this.OKButton.waitFor({state:'visible'});
await this.OKButton.click();
   
  }

  async VerifyErrorMessage(){
    await this.AddNewButton.waitFor({state:'visible'});
    await this.AddNewButton.click();
    await this.saveBlockMasterButton.waitFor({state:'visible'});
    await this.saveBlockMasterButton.click();
    await expect(this.ErrorMessage).toBeVisible();
  }


}