
import { Locator, Page, expect } from '@playwright/test';
import { LoginPage } from '../FacilityModule/LoginPage';
import { count } from 'console';



export class DocumentVerificationSchedulingUG{
  // 1. Define types for locators
  readonly page: Page;
   readonly loginPage: LoginPage; 
   readonly hamburgerMenu:Locator;
   readonly MenuSearch:Locator;
   readonly DocumentSchedulingMenu:Locator;
   readonly campusDropdown:Locator;
   readonly SelectCampus:Locator;
   readonly ProgramDropdown:Locator;
   readonly SelectProgram:Locator;
   readonly StatusDropdown:Locator;
   readonly SelectStatus:Locator;
   readonly SerachButton:Locator;
   readonly VerificationDate:Locator;
   readonly VerificationTime:Locator;
   readonly Venue:Locator;
   readonly createslots:Locator;
   readonly successMessageOKButton:Locator;
   readonly futureDateErrorMessage:Locator;
   readonly ErrorOkayButton:Locator;
   readonly mandatoryFeildErrorMessage:Locator;


  constructor(page: Page) {
   this.page=page;
   this.loginPage = new LoginPage(page);
   this.hamburgerMenu = page.locator("//*[name()='path' and contains(@d,'M3 18h18v-')]");
   this.MenuSearch=page.getByRole('textbox', { name: 'Search modules (Ctrl + D)' });
   this.DocumentSchedulingMenu=page.locator('span').filter({ hasText: 'Document Verification Scheduling' }).first();
   this.campusDropdown= page.locator('div:nth-child(2) > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m');
   this.SelectCampus=page.getByRole('option', { name: 'BANGALORE BANNERGHATTA ROAD CAMPUS' });
   this.ProgramDropdown=page.locator('div:nth-child(3) > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').first();
   this.SelectProgram=page.getByRole('option',{name:'Under Graduate Degree'});
   this.StatusDropdown=page.locator("xpath=//label[contains(text(),'Status')]/following::input[@role='combobox'][1]");
   this.SelectStatus= page.getByRole('option', { name: 'Pending (For scheduling)' });
   this.SerachButton=page.getByRole('button', { name: 'Search' })
  this.VerificationDate = page.getByRole('textbox', { name: 'Select date' });
  this.VerificationTime=page.getByRole('textbox', { name: 'Select time' });
  this.Venue= page.getByRole('textbox', { name: 'Venue *' });
  this.createslots=page.getByRole('button', { name: 'Create Slots & Generate Intimations' });
  this.successMessageOKButton=page.getByRole('button', { name: 'OK' });
  this.futureDateErrorMessage=page.getByText('Please choose a future date for the schedule.', { exact: true });
  this.ErrorOkayButton=page.locator('#alert-box-close-icon');
  this.mandatoryFeildErrorMessage=page.getByText('Please fill all mandatory fields (Date, Time, Venue) and select at least one class.', { exact: true });


 
  }


  
async ScheduleDocumentVerification(){
  await this.hamburgerMenu.click();
  await this.MenuSearch.fill('Document Verification Scheduling');
  await this.DocumentSchedulingMenu.click();
  await this.campusDropdown.click();
  await this.SelectCampus.click();
  await this.ProgramDropdown.click();
   await this.page.waitForTimeout(500);
  await this.SelectProgram.click();
  await this.StatusDropdown.click();
   await this.page.waitForTimeout(500);
  await this.SelectStatus.click();
  await this.SerachButton.click();
  

}

async IncorrectDate(){

  const today=new Date();
  const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
 const formattedDate = `${day}-${month}-${year}`;
    

  await this.VerificationDate.fill(formattedDate);
  await this.VerificationDate.press('Enter');
await this.page.waitForTimeout(500);

await this.createslots.click();
await expect(this.mandatoryFeildErrorMessage).toBeVisible();
   await this.page.waitForTimeout(500);
 await this.VerificationTime.fill('10:00');
 await this.Venue.fill('Admission Office');
   await this.page.waitForTimeout(500);
 const checkboxes = this.page.getByRole('checkbox');
const count = await checkboxes.count();

 if (count > 0) {
    console.log(`Total checkboxes found: ${count}`);

    for (let i = 1; i < count; i++) {
        const checkbox = checkboxes.nth(i);
      
        if (await checkbox.isVisible()) {
          await this.page.waitForTimeout(500);
            await checkbox.check();
            break; //Exit the loop after checking the first visible checkbox
        }
    }
}

await this.createslots.click();
await expect(this.futureDateErrorMessage).toBeVisible();

await this.page.waitForTimeout(500);

 await this.ErrorOkayButton.click();
await this.page.waitForTimeout(500);


}



async selectFutureDate() {
  const futureDate = new Date();

  futureDate.setDate(futureDate.getDate() + 1);

  const day = String(futureDate.getDate()).padStart(2, '0');
  const month = String(futureDate.getMonth() + 1).padStart(2, '0');
  const year = futureDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
    

  await this.VerificationDate.fill(formattedDate);
  await this.VerificationDate.press('Enter');
}






async ScheduleClass(){
 await this.VerificationTime.fill('10:00');
 await this.Venue.fill('Admission Office');

const checkboxes = this.page.getByRole('checkbox');
const count = await checkboxes.count();

if (count > 0) {
    console.log(`Total checkboxes found: ${count}`);

    for (let i = 1; i < count; i++) {
        const checkbox = checkboxes.nth(i);
      
        if (await checkbox.isVisible()) {
          await this.page.waitForTimeout(1000);
            await checkbox.check();
            break; //Exit the loop after checking the first visible checkbox
        }
    }
}

// Filter table row by action button or text inside the target row to avoid strict mode errors
    const targetRow = this.page.getByRole('row').filter({ hasText: 'View Students' }).first();
    await expect(targetRow).toBeVisible();

    // Directly check the checkbox in the matching row (replaces manual loop)
    await targetRow.getByRole('checkbox').check();

const className = await targetRow.getByRole('cell').nth(1).innerText();
    const programmeName = await targetRow.getByRole('cell').nth(2).innerText();

    console.log("Class:", className.trim());
    console.log("Programme:", programmeName.trim());
   // await this.createslots.click();
 //await this.successMessageOKButton.click();
  await this.page.waitForTimeout(1000);

}

}