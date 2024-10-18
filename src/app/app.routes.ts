

import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegisterComponent },
    { path: 'home', component: LayoutComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', component: AdminPanelComponent },
];




