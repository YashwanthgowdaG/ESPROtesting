import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';     
import { FacilityPageInfra } from './FacilityPageInfra'; 
import { FacilityPageCategory } from './FacilityPageCategory';
import { FacilityPageTypes } from './FacilityPageTypes';
import { AddBlock} from './AddNewBlockMaster';
import { AddNewFacility } from './AddNewFacility';
import { Student_login } from '../Student_Application/Student_appln_login';
import{ UG_appln }  from '../Student_Application/UG_Application';
import{ PG_appln }  from '../Student_Application/PG_Application';
import {DocumentVerificationSchedulingUG} from '../Admission_Module/DocumentVerificationSchedulingUG';

import { Draft_discard } from '../Student_Application/DraftAppllicationRemoval';
import {DocumentVerificationSchedulingPG} from '../Admission_Module/DocumentVerificationSchedulingPG';
import { IndividualDocumentVerification } from '../Admission_Module/Individual_Document _Verification';

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
  PG_appln:PG_appln;
  DocumentVerificationSchedulingUG:DocumentVerificationSchedulingUG;
  Draft_discard:Draft_discard;
  DocumentVerificationSchedulingPG:DocumentVerificationSchedulingPG;
  IndividualDocumentVerification:IndividualDocumentVerification;
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
  PG_appln: async ({ page }, use) => {
    await use(new PG_appln(page));
  },
  DocumentVerificationSchedulingUG:async({page},use)=>{
    await use(new DocumentVerificationSchedulingUG(page) )
  },
   Draft_discard:async({page},use)=>{
    await use(new Draft_discard(page) )
  },
  DocumentVerificationSchedulingPG:async({page},use)=>{
    await use(new DocumentVerificationSchedulingPG(page) )
  },
  IndividualDocumentVerification:async({page},use)=>{
    await use(new IndividualDocumentVerification(page) )
  }





});

export { expect } from '@playwright/test';