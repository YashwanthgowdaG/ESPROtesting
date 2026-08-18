import { Locator, Page, expect } from '@playwright/test';

export class Student_login{
  // 1. Define types for locators
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
 // readonly errorMessage: Locator;
  

  constructor(page: Page) {
    this.page = page;
    // 2. Initialize locators in the constructor
    this.email = page.getByRole('textbox', { name: 'Email' });
    this.password =page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    
  }


  
  // 3. Page Actions (Methods)
  async navigate() {
    await this.page.goto('https://qap.christuniversity.in/Application/');
  }

  

  async loginvalid(user: string, pass: string) {
    await this.email.waitFor({state:'visible'});
    await this.email.fill(user);
    await this.password.waitFor({state:'visible'});
    await this.password.fill(pass);
    await this.loginButton.waitFor({state:'visible'});
    await this.loginButton.click({ force: true });
    await this.page.waitForTimeout(2000);


  }

async logininvalid(user: string, pass: string) {
    await this.email.waitFor({state:'visible'});
    await this.email.fill(user);
    await this.password.waitFor({state:'visible'});
    await this.password.fill(pass);
    await this.loginButton.waitFor({state:'visible'});
    await this.loginButton.click({ force: true });
    
}}