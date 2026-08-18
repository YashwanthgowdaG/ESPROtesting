// ...existing code...
import { Locator, Page, expect } from '@playwright/test';
import { Student_login } from './Student_appln_login';
import path from 'path';

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
  readonly UploadDocumentsButton: Locator;
  readonly submitButton: Locator;
  readonly saveAndproceedButton: Locator;
  readonly eligiblity: Locator;
  readonly eligibilitytest:Locator;
  readonly confrimButton: Locator;
  readonly confirmpopup:Locator;
  readonly Date:Locator;
  readonly venue:Locator;
  readonly proceedToPaymentButton:Locator;
  readonly PaymentCheckbox:Locator;
  readonly paynowButton:Locator;
  readonly InternetBankingButton:Locator;
  readonly SBIButton:Locator;

  readonly ChristUniversityLogo:Locator;
  readonly whiteScreenPaymentCloseButton:Locator;
  readonly closeandexitButton:Locator;
  readonly ApplicationDraftlink:Locator;
  //10th std locators
  readonly TenthBoard:Locator;
  readonly yearofpassingTenth:Locator;
  readonly monthofpassingTenth:Locator;
  readonly CountryOfInstitutionTenth:Locator;
  readonly StateOfInstitutionTenth:Locator;
  readonly ObtaibedMarksTenth:Locator;
  readonly totalMarksTenth:Locator;
  readonly nameOfInstitutionTenth:Locator;

  //12TH std locators
  readonly TwelvethBoard:Locator;
  readonly ExamName:Locator;
  readonly yearofpassingTwelveth:Locator;
  readonly monthofpassingTwelveth:Locator;
  readonly CountryOfInstitutionTwelveth:Locator;
  readonly StateOfInstitutionTwelveth:Locator;
  readonly ObtaibedMarksTwelveth:Locator;
  readonly totalMarksTwelveth:Locator;
  readonly nameOfInstitutionTwelveth:Locator;

  //subject eligibility locators
  readonly subjecteligibilitylink:Locator;
  readonly maxmarksinputbox:Locator;
  readonly minmarksinputbox:Locator;
  readonly submitButton1:Locator;

  constructor(page: Page) {
    this.page = page;
    this.Student_login = new Student_login(page);

    this.newApplication = page.getByText('NEW APPLICATION', { exact: true });
    this.ApplicationforDropdown = page.getByRole('combobox', { name: 'Application For *' });
    this.UG_option = page.getByRole('option', { name: 'Under Graduate Degree' });
    this.apply = page.getByRole('button', { name: 'Apply Now' }).first();
    this.preferenceLabels = page.locator('div label:has-text("Programme Preference")');
    this.okButton = page.getByRole('button', { name: 'OK' });
    this.preferedLocation1 =page.getByRole('combobox', { name: 'Preferred Location/Campus *' }).first();
    this.UploadDocumentsButton=page.getByLabel('Upload & View');
    this.submitButton=page.getByRole('button', { name: 'Submit' });
    this.saveAndproceedButton=page.locator(':text("SAVE & PROCEED")');
    this.eligiblity=page.getByRole('combobox', { name: 'Eligibility Test *' });
    this.eligibilitytest=page.getByRole('combobox', { name: 'Eligibility Test Status *' });
    this.confrimButton=page.locator("//span[normalize-space()='I Confirm']");
    this.confirmpopup=page.getByRole('button', { name: 'Confirm' });
    this.Date=page.getByRole('combobox', { name: 'Date *' });
    this.venue=page.getByRole('button', { name: 'Available' });
    this.proceedToPaymentButton=page.getByRole('button', { name: 'go to payment tab' });
    this.PaymentCheckbox=page.getByRole('checkbox', { name: 'controlled' });
    this.paynowButton=page.getByRole('button', { name: 'Pay Now' });
    this.InternetBankingButton=page.locator('#payment-option-list').getByText('Internet Banking');
    this.SBIButton=page.locator('#netbank_popularoptions').getByRole('img');
    this.ChristUniversityLogo=page.getByRole('img').nth(2);
    this.whiteScreenPaymentCloseButton=page.locator('iframe[name="response-frame"]').contentFrame().getByRole('img', { name: 'Close Icon' });
    this.closeandexitButton=page.getByRole('button', { name: 'Close & Exit' });
    this.ApplicationDraftlink=page.getByRole('link', { name: 'Application is in Draft Mode' });
    //10th locators
    this.TenthBoard=page.getByRole('combobox', { name: 'Board State of Institution' });
    this.yearofpassingTenth=page.getByRole('combobox', { name: 'Year of Passing *' }).first();
    this.monthofpassingTenth=page.getByRole('combobox', { name: 'Month of Passing *' }).first();
    this.CountryOfInstitutionTenth=page.getByRole('combobox', { name: 'Country of Institution *' }).first();
    this.StateOfInstitutionTenth=page.locator('#freesol-other-options').nth(1);
    this.ObtaibedMarksTenth=page.getByRole('spinbutton', { name: 'Obtained Marks Obtained Marks' });
    this.totalMarksTenth=page.getByRole('textbox', { name: 'Total Marks Total Marks' });
    this.nameOfInstitutionTenth=page.getByRole('combobox', { name: 'Type to Search...' }).first();
    //12th locators
    this.TwelvethBoard=page.locator('#freesol-other-options').nth(3);
    this.ExamName=page.getByRole('combobox', { name: 'Exam Name *' });
    this.yearofpassingTwelveth= page.getByRole('combobox', { name: 'Year of Passing *' }).nth(1);
    this.monthofpassingTwelveth=page.getByRole('combobox', { name: 'Month of Passing *' }).nth(1);
    this.CountryOfInstitutionTwelveth=page.getByRole('combobox', { name: 'Country of Institution *' }).nth(1);
    this.StateOfInstitutionTwelveth=page.locator('#freesol-other-options').nth(4);
    this.ObtaibedMarksTwelveth=page.locator('#obtainedmarks').nth(1);
    this.totalMarksTwelveth=page.locator('#maxMarks').nth(1);
    this.nameOfInstitutionTwelveth=page.getByRole('combobox', { name: 'Type to Search...' }).nth(1);

    this.subjecteligibilitylink=page.getByText('Enter Subject Details', { exact: true });
    this.maxmarksinputbox=page.locator('#maximumMarks');
    this.minmarksinputbox= page.locator('#marksObtained');
    this.submitButton1= page.getByRole('button', { name: 'Submit' });


  }

  async apply_first_ug_program_and_submit_profile(data?: any) {
    const loginEmail = data?.login?.email ?? '317500testchristuniversity@gmail.com';
    const loginPassword = data?.login?.password ?? 'christ@2022';
    const uploadimage = data?.filePath ?? path.resolve('tests/data/images/student-photo.png');
    const uploadmarkscard=data?.secondFilePath ?? path.resolve('tests/data/images/student_marks_card.png"');
    const tenth = data?.tenth ?? { board: 'SSLC', year: '2018', month: 'August', country: 'India', state: 'Karnataka', obtained: '100', total: '120', institution: 'christ' };
    const twelveth = data?.twelveth ?? { board: 'PUC', exam: 'Karnataka PUC', year: '2020', month: 'August', country: 'India', state: 'Karnataka', obtained: '100', total: '120', institution: 'christ' };

    await this.Student_login.navigate();
    await this.Student_login.loginvalid(loginEmail, loginPassword);

    await this.newApplication.click();
    await this.ApplicationforDropdown.click();
    await this.UG_option.click();
    await this.page.waitForTimeout(2000);
    await this.page.locator('button:has-text("APPLY NOW")').first().click();
   

    if (await this.okButton.isVisible()) {
      await this.okButton.click();
    }

    await this.page.waitForTimeout(1000);

    await this.preferedLocation1.click();
    await this.preferedLocation1.press('ArrowDown');
    await this.preferedLocation1.press('Enter');
    await this.page.waitForTimeout(1500);

    const otherProgrammeDropdowns=this.page.getByRole('combobox', { name: /Programme Preference \d*/i });

    const campusDropdowns=this.page.getByRole('combobox', { name: 'Preferred Location/Campus *' });


    const totalOtherPreferences= await otherProgrammeDropdowns.count();
    console.log(`Total 'Other Preferences' found: ${totalOtherPreferences}`)

    if(await otherProgrammeDropdowns.isVisible){
    for (let i = 0; i < totalOtherPreferences; i++) {
      const progInput=otherProgrammeDropdowns.nth(i);
      await progInput.click();
      await progInput.press('ArrowDown');
  
      await progInput.press('Enter');

    await this.page.waitForTimeout(500);
      const campusInput=campusDropdowns.nth(i+1);
      await campusInput.click();
      await campusInput.press('ArrowDown');
      await campusInput.press('Enter');
    }}
    
  await this.UploadDocumentsButton.click();
await this.page.waitForTimeout(1000);

// Target the underlying <input type="file"> element directly
const inputfile = this.page.locator('input[type="file"]'); 
await inputfile.setInputFiles(uploadimage);

await this.page.waitForTimeout(2000);
await this.submitButton.click();
 await this.page.waitForTimeout(2000); 
await this.saveAndproceedButton.click();

await this.page.waitForTimeout(2000); 



const checkboxes =this.page.getByRole('checkbox');
        
console.log(`Total checkboxes found: ${await checkboxes.count()}`);
for (let i = 0; i < await checkboxes.count(); i++) {
  const checkbox = checkboxes.nth(i);
  await checkbox.check();
  await this.page.waitForTimeout(100); // Optional: Add a small delay for better visibility
 
}
 await this.saveAndproceedButton.click();
await this.page.waitForTimeout(2000); 

if(await this.eligiblity.isVisible()) {
  await this.eligiblity.click();
  await this.eligiblity.press('ArrowDown');
  await this.eligiblity.press('Enter');
  await this.eligibilitytest.click();
  await this.eligibilitytest.press('ArrowDown');
  await this.eligibilitytest.press('Enter');
 
await this.saveAndproceedButton.click();
}

if(await this.saveAndproceedButton.isVisible){
await this.page.waitForTimeout(1000);
await this.saveAndproceedButton.click();  
    }

if(await this.saveAndproceedButton.isVisible){
await this.page.waitForTimeout(2000);
await this.saveAndproceedButton.click();  
  }
await this.page.waitForTimeout(1000);
const uploadButtons = this.page.locator('button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.css-14ecbw4');

const fileInput = this.page.locator('input[type="file"]');
//10th std

  await this.TenthBoard.click();
  await this.TenthBoard.fill(tenth.board);
  await this.TenthBoard.press('Enter');

  await this.yearofpassingTenth.click();
  await this.yearofpassingTenth.fill(tenth.year);
  await this.yearofpassingTenth.press('Enter');

  await this.monthofpassingTenth.click();
  await this.monthofpassingTenth.fill(tenth.month);
  await this.monthofpassingTenth.press('Enter');

  await this.CountryOfInstitutionTenth.click();
  await this.CountryOfInstitutionTenth.fill(tenth.country);
  await this.CountryOfInstitutionTenth.press('Enter');

  await this.StateOfInstitutionTenth.click();
  await this.StateOfInstitutionTenth.fill(tenth.state);
  await this.page.waitForTimeout(2000);

  await this.StateOfInstitutionTenth.press('Enter');

  await this.ObtaibedMarksTenth.click();
  await this.ObtaibedMarksTenth.fill(tenth.obtained);
  await this.totalMarksTenth.click();
  await this.totalMarksTenth.fill(tenth.total);

  await this.nameOfInstitutionTenth.click();
  await this.nameOfInstitutionTenth.fill(tenth.institution);
  await this.nameOfInstitutionTenth.press('ArrowDown');
  await this.nameOfInstitutionTenth.press('Enter');

//12th std

  await this.TwelvethBoard.click();
  await this.TwelvethBoard.fill(twelveth.board);
  await this.TwelvethBoard.press('Enter');

  await this.ExamName.click();
  await this.ExamName.fill(twelveth.exam);
  await this.ExamName.press('Enter');

  await this.yearofpassingTwelveth.click();
  await this.yearofpassingTwelveth.fill(twelveth.year);
  await this.yearofpassingTwelveth.press('Enter');

  await this.monthofpassingTwelveth.click();

  await this.monthofpassingTwelveth.fill(twelveth.month);
  await this.monthofpassingTwelveth.press('Enter');

  await this.CountryOfInstitutionTwelveth.click();
  await this.CountryOfInstitutionTwelveth.fill(twelveth.country);
  await this.CountryOfInstitutionTwelveth.press('Enter');

  await this.StateOfInstitutionTwelveth.click();
  await this.StateOfInstitutionTwelveth.fill(twelveth.state);
  await this.page.waitForTimeout(1000);
  await this.StateOfInstitutionTwelveth.press('Enter');

  await this.ObtaibedMarksTwelveth.click();
  await this.ObtaibedMarksTwelveth.fill(twelveth.obtained);
  await this.totalMarksTwelveth.click();
  await this.totalMarksTwelveth.fill(twelveth.total);

  await this.nameOfInstitutionTwelveth.click();
  await this.nameOfInstitutionTwelveth.fill(twelveth.institution);
  await this.nameOfInstitutionTwelveth.press('ArrowDown');
  await this.nameOfInstitutionTwelveth.press('Enter');

if(await this.subjecteligibilitylink.isVisible()){

  await this.subjecteligibilitylink.click();
  const count=await this.minmarksinputbox.count();
  console.log('count:',count);
  for (let i = 1; i < count-1; i++) {
        await this.minmarksinputbox.nth(i).fill('80');
    }
  const count1= await this.maxmarksinputbox.count();
  console.log('count1:',count1)
  for (let i = 0; i <= count1-1; i++) {
        await this.maxmarksinputbox.nth(i).fill('100');
    }
    await this.submitButton.click();
}

  if(await uploadButtons.nth(0).isVisible()) {
await uploadButtons.nth(0).click();
await this.page.waitForTimeout(1000);
await fileInput.setInputFiles(uploadmarkscard);
await this.page.waitForTimeout(1000);
await this.submitButton.click();
}
// Upload for Class 11/12
if(await uploadButtons.nth(1).isVisible()) {
await uploadButtons.nth(1).click();
await fileInput.setInputFiles(uploadmarkscard);
await this.page.waitForTimeout(1000);
await this.submitButton.click();

}
await this.page.waitForTimeout(1000);
await this.saveAndproceedButton.click();
await expect(this.confrimButton).toBeVisible({ timeout: 10000 });
await this.confrimButton.click();
await expect(this.confirmpopup).toBeVisible({ timeout: 10000 });
await this.confirmpopup.click();
await this.page.waitForTimeout(1000);
await this.Date.click();
await this.Date.press('Enter');
await this.venue.click();





await this.page.waitForTimeout(2000);
const checkbox = this. page.getByRole('checkbox').nth(1);
if (await checkbox.isVisible()) {
await checkbox.check();
}

await this.proceedToPaymentButton.click();

await this.PaymentCheckbox.click();

await expect(this.paynowButton).toBeEnabled({
    timeout: 30000
});

await this.paynowButton.click();


// ========================================
// Check Internet Banking
// ========================================

try {

    await this.InternetBankingButton.waitFor({
        state: 'visible',
        timeout: 10000
    });


  await this.InternetBankingButton.click();

await expect(this.SBIButton).toBeVisible({
    timeout: 30000
});

await this.SBIButton.click();


// ========================================
// Make Payment
// ========================================

const page1Promise = this.page.waitForEvent('popup');

await this.page.getByRole('button', {
    name: 'Make Payment for ₹'
}).click();

const page1 = await page1Promise;

await page1.getByLabel('Status:').selectOption('Success');

await page1.getByRole('button', {
    name: 'Submit'
}).click();

await this.page.getByRole('button', {
    name: 'Submit'
}).click();


} catch {

    console.log('Payment Succesfully completed without Internet Banking');

    // ========================================
    // White payment screen
    // ========================================

    try {

        await this.whiteScreenPaymentCloseButton.waitFor({
            state: 'visible',
            timeout: 10000
        });

        console.log('White payment screen detected');

        await this.whiteScreenPaymentCloseButton.click();

        await this.closeandexitButton.click();

        await this.ApplicationDraftlink.click();
        await this.page.waitForTimeout(2000);

        const checkbox = this.page.getByRole('checkbox').nth(1);

        if (await checkbox.isVisible()) {
            await checkbox.check();
        }

        // Go back to payment
        await this.proceedToPaymentButton.click();

        await this.PaymentCheckbox.click();

        await expect(this.paynowButton).toBeEnabled({
            timeout: 30000
        });

        // Retry Pay Now
        await this.paynowButton.click();

        // Wait again for Internet Banking
        await expect(this.InternetBankingButton).toBeVisible({
            timeout: 30000
        });
        await this.InternetBankingButton.click();
        await this.SBIButton.click();
       
       const page1Promise = this.page.waitForEvent('popup');

await this.page.getByRole('button', {
    name: 'Make Payment for ₹'
}).click();

const page1 = await page1Promise;

await page1.getByLabel('Status:').selectOption('Success');

await page1.getByRole('button', {
    name: 'Submit'
}).click();

await this.page.getByRole('button', {
    name: 'Submit'
}).click();

        console.log('Internet Banking visible after retry');

    } catch (error) {

        console.log('White payment screen was not detected.');

        throw error;
    }
}





  }

}