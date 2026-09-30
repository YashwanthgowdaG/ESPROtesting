import { test } from '@playwright/test';
import { PG_appln } from '../../pages/Student_Application/PG_Application';
import fs from 'fs';

const data = JSON.parse(
    fs.readFileSync(
        './tests/data/ug_app_data.json',
        'utf-8'
    )
);

data.forEach((row: any, idx: number) => {

    test(`Apply UG application  - ${row.name ?? idx + 1}`, async ({ page }) => {

        const ug = new PG_appln(page);

        await ug.apply_first_PG_program_and_submit_profile(row);

    });

});