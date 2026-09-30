import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  // 1. Define types for locators
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  

  constructor(page: Page) {
    this.page = page;
    // 2. Initialize locators in the constructor
    this.username = page.getByRole('textbox', { name: 'Login ID' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
    this.errorMessage = page.getByText('Invalid Login-ID or Password', { exact: true });
  }

  // 3. Page Actions (Methods)
  async navigate() {
    await this.page.goto('https://prepespro.christuniversity.in/ERP/');
  }

  async loginvalid(user: string, pass: string) {
    await this.username.waitFor({state:'visible'});
    await this.username.fill(user);
    await this.password.waitFor({state:'visible'});
    await this.password.fill(pass);
    await this.loginButton.waitFor({state:'visible'});
    await this.loginButton.click({ force: true });
    await expect(this.page).toHaveURL('https://prepespro.christuniversity.in/ERP/');
  }

async logininvalid(user: string, pass: string) {
    await this.username.waitFor({state:'visible'});
    await this.username.fill(user);
    await this.password.waitFor({state:'visible'});
    await this.password.fill(pass);
    await this.loginButton.waitFor({state:'visible'});
    await this.loginButton.click({ force: true });
    await expect(this.errorMessage).toBeVisible();
}}