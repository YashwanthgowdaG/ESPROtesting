import { test, expect } from '../../pages/FacilityModule/fixtures.js';




test.describe('IndividualDocumentVerification', () => {
 

test('Verify students from Excel', async ({ IndividualDocumentVerification, loginPage }) =>
     { await loginPage.navigate(); 
        await loginPage.loginvalid( 'sreejith.l', 'Cdi@christ2026' ); 
      const registerNumbers =
  await IndividualDocumentVerification.readRegisterNumbers();
 // await IndividualDocumentVerification.NavigateToIndividualDocumentVerification();
  await IndividualDocumentVerification.ErrorMsgValidation();
for (const registerNumber of registerNumbers) {

  console.log(`Searching student: ${registerNumber}`);

  await IndividualDocumentVerification.verifyDocumentsByRegisterNumber(registerNumber);
}
  
  
});

 
});