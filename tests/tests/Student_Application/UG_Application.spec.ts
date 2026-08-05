import { test } from '@playwright/test';
import { UG_appln } from '../../pages/Student_Application/UG_Application';
test('UG application flow', async ({ page }) => {
  const ug = new UG_appln(page);
  await ug.apply_first_ug_program_and_submit_profile();
});