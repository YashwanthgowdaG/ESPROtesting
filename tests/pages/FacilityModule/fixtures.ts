import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';     
import { FacilityPageInfra } from './FacilityPageInfra'; 
import { FacilityPageCategory } from './FacilityPageCategory';
import { FacilityPageTypes } from './FacilityPageTypes';
import { AddBlock} from './AddNewBlockMaster';
import { AddNewFacility } from './AddNewFacility';
import { Student_login } from '../Student_Application/Student_appln_login';
import{ UG_appln }  from '../Student_Application/UG_Application';
import {selection_plan} from '../Admission_Module/selection_process_plan'

// 1. Define the types for your fixtures

type MyFixtures = {
  loginPage: LoginPage;   // Anyting =class name
  facilityPage: FacilityPageInfra;
  facilityCategory: FacilityPageCategory;
  facilityTypes:FacilityPageTypes;
  AddNewBlockMaster:AddBlock;
  addNewFacility: AddNewFacility;
  Student_login:Student_login;
  UG_appln:UG_appln;
  selection_plan:selection_plan;
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

   },

   Student_login: async ({ page }, use) => {
    await use(new Student_login(page));
  },
  UG_appln: async ({ page }, use) => {
    await use(new UG_appln(page));
  },
  selection_plan:async({page},use)=>{
    await use(new selection_plan(page) )
  }





});

export { expect } from '@playwright/test';