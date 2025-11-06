import { Routes } from '@angular/router';
import path from 'node:path';
import { Home } from './component/home/home';
import { PrivacyPolicy } from './component/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'privacy-policy', component: PrivacyPolicy },
];
