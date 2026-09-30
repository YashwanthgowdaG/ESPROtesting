import { Locator, Page, expect } from '@playwright/test';
import { Student_login } from './Student_appln_login';


export class Draft_discard{
  // 1. Define types for locators
  readonly page: Page;
  readonly Student_login: Student_login;
  


 
  

  constructor(page: Page) {
    this.page = page;
    this.Student_login = new Student_login(page);


    
  }


  
async removalofDraft() {
    await this.Student_login.navigate();

    await this.Student_login.loginvalid(
        '317500testchristuniversity@gmail.com',
        'christ@2022'
    );

    const draftButtons = this.page.getByRole('button', { name: 'Remove' });
    const confirmButton = this.page.getByRole('button', { name: 'Confirm' });

    while (await draftButtons.count() > 0) {

        console.log(`Drafts remaining: ${await draftButtons.count()}`);

        await draftButtons.first().click();

        await confirmButton.waitFor({ state: 'visible' });
        await confirmButton.click();

        // Wait for the clicked draft to be removed / UI to update
        await this.page.waitForTimeout(1000);
    }

    console.log('All drafts removed');
}

  }