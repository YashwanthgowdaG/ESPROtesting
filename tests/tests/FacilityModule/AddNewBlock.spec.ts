import { test, expect } from '../../pages/FacilityModule/fixtures';
test.describe('ADD Block Master', () => {

  

 test('Verify User is able to add Block', async ({ AddNewBlockMaster }) => {
   
    
await AddNewBlockMaster.NavigateToBlockMaster();
await AddNewBlockMaster.AddBlockMaster(); 
await AddNewBlockMaster.VerifyErrorMessage();
});
 
});