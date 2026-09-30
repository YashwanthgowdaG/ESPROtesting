import { Locator, Page, expect } from '@playwright/test';
import { LoginPage } from '../FacilityModule/LoginPage';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

export interface RegisterData {
  [key: string]: any;
}

export class IndividualDocumentVerification {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly hamburgerMenu: Locator;
  readonly menuSearch: Locator;
  readonly individualDocumentVerificationMenu: Locator;
  readonly registerNumberInput: Locator;
  readonly searchButton: Locator;
  readonly VerifyAllButton:Locator;
  readonly SaveAndProceed:Locator;
  readonly SubmitButton:Locator;
  readonly HardcopySubmittedButton:Locator;
  readonly successMessageOkButton:Locator;
  readonly verifyAndEligibleButton:Locator;
  readonly AddressLineErrorMessage:Locator;
  readonly MandatoryFieldErrorMessageAddress:Locator;
  readonly ZipCode:Locator;
  readonly CountryDropdown:Locator;
  readonly Prerequisites:Locator;
  readonly WorkExperience:Locator;
  readonly SSlCBoard:Locator;
  readonly SSLCoption:Locator;
  readonly MandatoryFeildErrorMessageEducation:Locator;
  readonly DueDate:Locator;
  readonly AccommodationType:Locator;
  readonly OwnHouse:Locator;


  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);

    this.hamburgerMenu = this.hamburgerMenu = page.locator("//*[name()='path' and contains(@d,'M3 18h18v-')]");;
    this.menuSearch = page.getByRole('textbox', {name: 'Search modules (Ctrl + D)'});
    this.individualDocumentVerificationMenu = page.locator('span').filter({ hasText: 'Individual Document Verification' }).first();
    this.registerNumberInput = page.getByRole('textbox', { name: 'Register No.'});
    this.searchButton = page.getByRole('button', {name: 'Search Student'});
    this.VerifyAllButton=page.getByLabel('Verify All');
    this.SaveAndProceed=page.getByRole('button', { name: 'SAVE & PROCEED >' });
    this.SubmitButton=page.getByRole('button', { name: 'Submit' });
    this.HardcopySubmittedButton=page.getByRole('columnheader', { name: 'Hard Copy Submitted' }).getByRole('checkbox');
    this.successMessageOkButton=page.getByRole('button', { name: 'OK' });
    this.verifyAndEligibleButton=page.getByRole('button', { name: 'verified and eligible' });
    this.AddressLineErrorMessage= page.getByRole('textbox', { name: 'Address Line' }).first();
    this.MandatoryFieldErrorMessageAddress=page.getByText('Please fill all mandatory').first();
    this.ZipCode=page.getByRole('textbox', { name: 'Zip Code' }).nth(1);
    this.CountryDropdown=page.getByRole('combobox', { name: 'Country *' }).first();
    this.Prerequisites=page.getByText('Prerequisites', { exact: true });
    this.WorkExperience=page.getByText('Work Experience', { exact: true });
    this.SSlCBoard=page.getByRole('combobox', { name: 'Board State * Board State *' });
    this.SSLCoption=page.getByRole('option', { name: 'SSLC' });
    this.MandatoryFeildErrorMessageEducation=page.getByText('Please fill all mandatory fields in Educational Details.', { exact: true });
    this.DueDate=page.locator('#due-date-field');
    this.AccommodationType=page.getByRole('combobox', { name: 'Accommodation Type *' });
    this.OwnHouse= page.getByText('Own House', { exact: true });

  }

 async readRegisterNumbers(): Promise<string[]> {
  const workbook = XLSX.readFile(
    'tests/data/register_no.xlsx'
  );

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const rows = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: ''
  }) as unknown[][];

  return rows
    .map(row => String(row[0]).trim())
    .filter(registerNumber => registerNumber !== '');
}




async NavigateToIndividualDocumentVerification(){
  await this.page.waitForTimeout(500);
    await this.hamburgerMenu.click();
    await this.menuSearch.fill('Individual Document Verification');
     await this.page.waitForTimeout(500);
    await this.individualDocumentVerificationMenu.click();
}


async ErrorMsgValidation(){
 await this.NavigateToIndividualDocumentVerification()
 await this.searchButton.click();
 await this.page.waitForTimeout(500);  
 await expect(this.page.getByText('Please enter a valid Application No. or Register No.', { exact: true })).toBeVisible();
 if (await this.page.getByText('Please enter a valid Application No. or Register No.', { exact: true }).isVisible()) {
  await this.page.getByText('Please enter a valid Application No. or Register No.', { exact: true }).waitFor({ state: 'hidden', timeout: 10000 });
}

 await this.page.waitForTimeout(500);  
 await this.registerNumberInput.fill('1234567');
 await this.searchButton.click();
 await expect(this.page.getByText('Invalid Register No / Application No', { exact: true })).toBeVisible();
 if (await this.page.getByText('Invalid Register No / Application No', { exact: true }).isVisible()) {
  await this.page.getByText('Invalid Register No / Application No', { exact: true }).waitFor({ state: 'hidden', timeout: 10000 });
}
  
}

async AddressErrorMsgValidation() {

  // Check Accommodation Type only if it is empty
  const accommodationValue = await this.AccommodationType.inputValue();

  if (!accommodationValue.trim()) {
    console.log('Accommodation Type is empty. Selecting Own House.');

    await this.AccommodationType.click();
    await this.OwnHouse.click();
  } else {
    console.log(`Accommodation Type already filled: ${accommodationValue}`);
  }

  // Address Line validation
  await this.AddressLineErrorMessage.click();
  await this.AddressLineErrorMessage.press('Control+A');
  await this.AddressLineErrorMessage.press('Delete');

  await this.SaveAndProceed.click();

  await expect(this.MandatoryFieldErrorMessageAddress).toBeVisible();

  // Restore Address Line
  await this.AddressLineErrorMessage.fill(
    '152 christ University Bengaluru, Karnataka, India'
  );

  // Zip Code validation
  await this.ZipCode.click();
  await this.ZipCode.press('Control+A');
  await this.ZipCode.press('Delete');

  await this.SaveAndProceed.click();

  await expect(this.MandatoryFieldErrorMessageAddress).toBeVisible();

  // Restore Zip Code
  await this.ZipCode.fill('560001');

  await this.page.waitForTimeout(500);
}

async EducationalDetailsErrorValidation(){

  await this.SSlCBoard.click();
  await this.SSlCBoard.press('Control+A')
  await this.SSlCBoard.press('Delete');
  await this.SaveAndProceed.click();
  await expect(this.MandatoryFeildErrorMessageEducation).toBeVisible();
//   if (await this.MandatoryFeildErrorMessageEducation.isVisible()) {
//   await this.MandatoryFeildErrorMessageEducation.waitFor({ state: 'hidden', timeout: 10000 });
// }
 await this.SSlCBoard.click();
  await this.SSLCoption.click();

}



  async verifyDocumentsByRegisterNumber( registerNumber: string): Promise<void> {
     //await this.NavigateToIndividualDocumentVerification()
    await this.registerNumberInput.fill(registerNumber);
    await expect(this.registerNumberInput).toHaveValue(registerNumber);   
    await this.searchButton.click();
     await this.page.waitForTimeout(500); 
     
     await this.AddressErrorMsgValidation();


     if(!await this.VerifyAllButton.isChecked()){
    await this.VerifyAllButton.click();
     }
    await this.SaveAndProceed.click();
     await this.page.waitForTimeout(500);
    
     await this.EducationalDetailsErrorValidation();

   
     if(!await this.VerifyAllButton.isChecked()){
    await this.VerifyAllButton.click();
     }
    await this.SaveAndProceed.click();
     await this.page.waitForTimeout(500);

     if(await this.Prerequisites.isVisible())
      {
        
     if(!await this.VerifyAllButton.isChecked()){
    await this.VerifyAllButton.click();
     }
    await this.SaveAndProceed.click();
     await this.page.waitForTimeout(500);
      }
      
      if(await this.WorkExperience.isVisible()){
          
     if(!await this.VerifyAllButton.isChecked()){
    await this.VerifyAllButton.click();
     }
    await this.SaveAndProceed.click();
     await this.page.waitForTimeout(500);
      }

     
    //await this.VerifyAllButton.click();
    await this.HardcopySubmittedButton.check();
     await this.page.waitForTimeout(500);
    await this.SaveAndProceed.click();


    await this.verifyAndEligibleButton.click();
    await this.SubmitButton.click();
    await this.successMessageOkButton.click();


  }
}