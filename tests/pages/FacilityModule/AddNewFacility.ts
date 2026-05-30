import { Locator, Page, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { LoadFnOutput } from 'node:module';

export class AddNewFacility {
  readonly page: Page;
 readonly loginPage: LoginPage; 
 
  // Module Locators
  readonly hamburgerMenu: Locator;
  readonly masterModule: Locator;
  readonly facilityMaster: Locator;
  readonly facilityManagement: Locator;
  readonly FacilityUnitButton: Locator;
  readonly AddNewFacilityButton:Locator;
  readonly campusdropdown: Locator;
  readonly SelectCampus: Locator;
  readonly blockDropdown:Locator;
  readonly SelectBlock: Locator;
  readonly floorDropdown: Locator;
  readonly Selectfloor: Locator;
  readonly InputUnitCode: Locator;
  readonly InputUnitName: Locator;
  readonly FacilityCategory:Locator;
  readonly SelectMeetingRoom: Locator;
  readonly FacilityType: Locator;
  readonly SelectBoardRoom: Locator;
  readonly SeatingCapacity: Locator;
  readonly FinalSubmit: Locator;
  readonly YesButton:Locator;
  readonly OkButton:Locator;
  readonly SelectConferenceHall:Locator;
  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);

    // Login page elements (from your snapshot)
  

    // Dashboard/Facility elements
    this.hamburgerMenu = page.locator("//*[name()='path' and contains(@d,'M3 18h18v-')]");
    this.masterModule =page.getByText('MASTERS', { exact: true });
    this.facilityMaster =page.locator('span:has-text("Facility Master")');;
    this.facilityManagement = page.locator('span').filter({ hasText: 'Facility Management' }).last();;
    this.FacilityUnitButton = page.getByRole('button', { name: 'Facility Unit' });
    this.AddNewFacilityButton=  page.getByRole('button', { name: 'Add' });
    this.campusdropdown= page.locator('div.css-hlgwow').locator('div').nth(1);
    this.SelectCampus=  page.getByText('BANGALORE CENTRAL CAMPUS', { exact: true });
    this.blockDropdown=page.locator("//div[@class='col-md-6']//div[@class='css-19bb58m']");
    this.SelectBlock=page.getByRole('option', { name: 'Block-I Main' });
    this.floorDropdown= page.locator("//div[3]//div[1]//div[1]//div[1]//div[1]//div[2]");
    this.Selectfloor=page.getByText('FIRST', { exact: true });
    this.InputUnitCode=page.getByRole('textbox', { name: 'e.g. A101' });
    this.InputUnitName= page.getByRole('textbox', { name: 'e.g. Classroom 1' });
    this.FacilityCategory=page.locator("//div[@class='row mb-5']//div[@class='css-19bb58m']");
    this.SelectMeetingRoom=page.getByText('Meeting Room');
    this.FacilityType=page.locator('.row.mb-5 > div:nth-child(2) > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m');
    this.SelectBoardRoom=page.getByRole('option', { name: 'Board Room' });
    this.SelectConferenceHall=page.getByRole('option', { name: 'Conference Hall' });
    this.SeatingCapacity=page.locator("//div[@class='col-md-6 mb-3 mb-md-0']//input[@placeholder='0']");
    this.FinalSubmit=page.getByRole('button', { name: 'Submit' });
    this.YesButton=page.locator("//div[@class='app-msgbox-overlay']//button[1]");
    this.OkButton=page.getByText('OK', { exact: true });

    this.page.addLocatorHandler(
      this.page.getByText('ESPro Update Available', { exact: true }),
      async () => {
        console.log('⚠️ Random ESPro Update Popup detected! Automating bypass...');
        await this.page.getByRole('button', { name: 'Refresh Later' }).click();
      }
    );
} 
  async goToAddFacility() {
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
    await this.FacilityUnitButton.waitFor({state:'visible'});
    await this.FacilityUnitButton.click();
    await this.AddNewFacilityButton.waitFor({state:'visible'});
    await this.AddNewFacilityButton.click();
    await this.campusdropdown.waitFor({state:'visible'});
    await this.campusdropdown.click();
    await this.SelectCampus.waitFor({state:'visible'});
    await this.SelectCampus.click();
    await this.blockDropdown.waitFor({state:'visible'});
    await this.blockDropdown.click();
    await this.SelectBlock.waitFor({state:'visible'});
    await this.SelectBlock.click();
    await this.floorDropdown.waitFor({state:'visible'});
    await this.floorDropdown.click();
    await this.Selectfloor.waitFor({state:'visible'});
    await this.Selectfloor.click();

    await this.InputUnitCode.waitFor({state:'visible'});
    const FacilityUnitCode = 
  Math.random().toString(36).replace(/[^a-z]/g, '').substring(0, 1).toUpperCase() + 
  Math.random().toString().substring(2, 5);
  await this.InputUnitCode.fill(FacilityUnitCode);

  await this.InputUnitName.waitFor({state:'visible'});

const FacilityUnitName= `Project_${Math.random().toString(36).substring(2, 7)}`;
await this.InputUnitName.fill(FacilityUnitName);
 await this.FacilityCategory.waitFor({state:'visible'});
await this.FacilityCategory.click();
await this.SelectMeetingRoom.waitFor({state:'visible'}); 
await this.SelectMeetingRoom.click();
await this.page.waitForTimeout(3000);
await this.FacilityType.waitFor({state:'visible'}); 
await this.FacilityType.click();
 await this.SelectBoardRoom.waitFor({state:'visible'});
await this.SelectBoardRoom.click();

 await this.SeatingCapacity.waitFor({state:'visible'});
await this.page.waitForTimeout(3000);
await this.SeatingCapacity.fill('100');

await this.FinalSubmit.click();
await this.YesButton.waitFor({state:'visible'});
await this.YesButton.click();
await this.page.waitForTimeout(3000);
await this.OkButton.waitFor({state:'visible'});
await expect(this.OkButton).toBeVisible();
await this.OkButton.click();

await this.page.pause();
    
  }
}