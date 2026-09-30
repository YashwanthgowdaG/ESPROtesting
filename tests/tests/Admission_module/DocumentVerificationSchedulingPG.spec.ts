import { test, expect } from '../../pages/FacilityModule/fixtures.js';




test.describe('Document Verification Scheduling', () => {
 

test('Verify User is able to schedule document verification', async ({ DocumentVerificationSchedulingPG, loginPage }) => {
    await loginPage.navigate();
     await loginPage.loginvalid('sreejith.l', 'Cdi@christ2026');
await DocumentVerificationSchedulingPG.ScheduleDocumentVerification();
await DocumentVerificationSchedulingPG.IncorrectDate();
await DocumentVerificationSchedulingPG.selectFutureDate();
await DocumentVerificationSchedulingPG.ScheduleClass();



  
  
});

 
});