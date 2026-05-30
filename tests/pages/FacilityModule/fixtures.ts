import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';     
import { FacilityPageInfra } from './FacilityPageInfra'; 
import { FacilityPageCategory } from './FacilityPageCategory';
import { FacilityPageTypes } from './FacilityPageTypes';
import { AddBlock} from './AddNewBlockMaster';
import { AddNewFacility } from './AddNewFacility';


// 1. Define the types for your fixtures

type MyFixtures = {
  loginPage: LoginPage;
  facilityPage: FacilityPageInfra;
  facilityCategory: FacilityPageCategory;
  facilityTypes:FacilityPageTypes;
  AddNewBlockMaster:AddBlock;
  addNewFacility: AddNewFacility;
};

// 2. Extend the base test
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  facilityPage: async ({ page }, use) => {
    await use(new FacilityPageInfra(page));
  },
  facilityCategory: async({ page },use)=>{
    await use(new FacilityPageCategory(page));
  },
  facilityTypes: async({ page },use)=>{
    await use(new FacilityPageTypes(page));
  },
   AddNewBlockMaster : async ({page },use )=>{
await use(new AddBlock(page));

   },
   addNewFacility  : async ({page },use )=>{
await use(new AddNewFacility(page));

   }


});

export { expect } from '@playwright/test';