import { test, expect } from '../../pages/FacilityModule/fixtures.js';

test.describe('Facility Management Workflow', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    // Log in with your actual credentials
    await loginPage.loginvalid('sreejith.l', 'Cdi@christ2026');
    
    // Wait for the login to finish and the dashboard to appear
    await expect(loginPage.page).toHaveURL('https://prepespro.christuniversity.in/ERP/'); 
  });

 test('Verify User is able to add Infrastuture', async ({ facilityPage }) => {
    // 1. Click the Hamburger - Use lowercase 'facilityPage'
 //   await facilityPage.openMenu();

    // 2. Click the specific module - Ensure the method name matches FacilityPage.ts
    await facilityPage.navigateToFacilityManagement(); 
     await facilityPage.createRandomFacility();
    await facilityPage.verifyEmptyFacilityNameError();
   
});
 
});