
import { FacilityPageCategory } from '../../pages/FacilityModule/FacilityPageCategory.js';
import { test, expect } from '../../pages/FacilityModule/fixtures.js';

test.describe('Facility Management Workflow', () => {

  

 test('Verify User is able to add category', async ({ facilityCategory }) => {
   
    
await facilityCategory.navigateToCategory();
await facilityCategory.createRandomCategory();
await facilityCategory.verifyEmptyColorCodeError();
});
 
});