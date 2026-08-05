import { test, expect } from '../../pages/FacilityModule/fixtures.js';


test.describe('Login Functionality', () => {
  
 

test('Verify User is able to login with Valid Student Crenditials', async ({ Student_login }) => {
  await Student_login.navigate();
  await Student_login.loginvalid('317500testchristuniversity@gmail.com', 'christ@2022');
  
  
});

 
});