import { FacilityPageTypes } from '../../pages/FacilityModule/FacilityPageTypes.js';
import { test, expect } from '../../pages/FacilityModule/fixtures.js';

test.describe('Facility Management Workflow', () => {

  

 test('Verify User is able to add Types and Error Message for EmptyType is displayed ', async ({ facilityTypes }) => {
   
    
await facilityTypes.navigateToTypes();
await facilityTypes.createRandomTypes();
await facilityTypes.verifyEmptyTypeNameError();
await facilityTypes.DeleteTypes();   
});
 
});