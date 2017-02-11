import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/Shared.module';
import { HomeRoutingModule } from './home.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent }   from './home.component';
import { GoodListComponent } from './good-admin/good-list.component';
import { GoodService } from './good-admin/service/good.service';

@NgModule({
    imports: [CommonModule,
              FormsModule,
              SharedModule,
              HomeRoutingModule],
    exports: [],
    declarations: [HomeComponent,
                   GoodListComponent],
    providers: [GoodService]
})
export class HomeModule { }