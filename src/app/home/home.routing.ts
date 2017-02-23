import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodListComponent } from './good-admin/good-list.component';
import { GoodAddComponent } from './good-admin/good-add.component';
import { HomeComponent } from './home.component';
import { LoggedInGuard } from '../service/logged-in.guard'


const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full' },
    {
        path:'home', 
        component:HomeComponent,
        canActivate:[LoggedInGuard],
        children: [
            {
                path:'good-list',
                component: GoodListComponent
            },
            {
                path:'good-add',
                component: GoodAddComponent
            }

        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
