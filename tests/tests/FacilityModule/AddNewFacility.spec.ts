import { test, expect } from '../../pages/FacilityModule/fixtures';
test.describe('ADD New Facility', () => {

  

 test('Verify User is able to add Facility', async ({ addNewFacility }) => {
   
    
await addNewFacility.goToAddFacility();
   
});
 
});