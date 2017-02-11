import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoggedInGuard } from '../service/logged-in.guard'
import { GoodListComponent } from './good-admin/good-list.component'


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
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
