import { test, expect } from '../../pages/FacilityModule/fixtures.js';
import { Draft_discard } from '../../pages/Student_Application/DraftAppllicationRemoval.js';


test.describe('Draft Removal', () => {
   

 

test('Verify User is able discard the draft applications', async ({ Draft_discard }) => {

  await Draft_discard.removalofDraft();
  
});

 
});