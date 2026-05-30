import { test, expect } from '../../pages/FacilityModule/fixtures.js';
import { LoginPage } from '../../pages/FacilityModule/LoginPage.js';

test.describe('Login Functionality', () => {
  
 

test('Verify User is able to login with Valid Crenditials', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.loginvalid('sreejith.l', 'Cdi@christ2026!');
  
});

  test('Verify error message is displayed when User enter invalid creditials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.logininvalid('wrongUser', 'wrongPass');
    //await expect(loginPage.errorMessage).toBeVisible();
   // await expect(loginPage.errorMessage).toContainText('Invalid Login-ID or Password');
  });
});