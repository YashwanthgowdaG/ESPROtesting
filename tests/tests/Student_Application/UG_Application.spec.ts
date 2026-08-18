import { test } from '@playwright/test';
import { UG_appln } from '../../pages/Student_Application/UG_Application';
import fs from 'fs';

const data = JSON.parse(
    fs.readFileSync(
        './tests/data/ug_app_data.json',
        'utf-8'
    )
);

data.forEach((row: any, idx: number) => {

    test(`Apply UG application  - ${row.name ?? idx + 1}`, async ({ page }) => {

        const ug = new UG_appln(page);

        await ug.apply_first_ug_program_and_submit_profile(row);

    });

});