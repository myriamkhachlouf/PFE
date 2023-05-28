import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';
import { CompetitorsComponent } from 'app/competitors/competitors.component';   
import { EmployeeComponent } from 'app/employee/employee.component';
import { MonitaryComponent } from 'app/monitary/monitary.component';
import { Component } from '@angular/core';
import { DealsComponent } from 'app/deals/deals.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'home',     component: TypographyComponent },
    { path: 'customersatisfaction',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'Login' ,        component : LoginComponent},
    { path: 'Competitor' , component: CompetitorsComponent},
    {path:  'Employee', component:EmployeeComponent},
    {path : 'Monitary', component: MonitaryComponent},
    {path : 'deals' , component: DealsComponent},
    
];
