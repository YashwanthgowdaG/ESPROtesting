import { test, expect } from '../../pages/FacilityModule/fixtures.js';




test.describe('Document Verification Scheduling', () => {
 

test('Verify User is able to schedule document verification', async ({ DocumentVerificationSchedulingUG, loginPage }) => {
    await loginPage.navigate();
     await loginPage.loginvalid('sreejith.l', 'Cdi@christ2026');
await DocumentVerificationSchedulingUG.ScheduleDocumentVerification();
await DocumentVerificationSchedulingUG.IncorrectDate();
await DocumentVerificationSchedulingUG.selectFutureDate();
await DocumentVerificationSchedulingUG.ScheduleClass();



  
  
});

 
});