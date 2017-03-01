import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// primeNG
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule} from 'primeng/primeng';
import { QuillModule } from 'ngx-quill';
// ng-bootstrap
import { PopoverModule } from 'ng2-bootstrap/ng2-bootstrap';
// customer
import { HomeRoutingModule } from './home.routing';
import { HomeComponent }   from './home.component';
import { GoodListComponent } from './good-admin/good-list.component';
import { GoodAddComponent } from './good-admin/good-add.component';
import { GoodParameterComponent } from './good-admin/good-parameter.component';
import { GoodService } from './good-admin/service/good.service';
import { SharedModule } from '../shared/Shared.module';

@NgModule({
    imports: [CommonModule,
              DialogModule,
              DataTableModule,
              FormsModule,
              FileUploadModule,
              GrowlModule,
              HomeRoutingModule,
              TreeTableModule,
              TreeModule,
              QuillModule,
              SharedModule,
              PopoverModule.forRoot()],
    exports: [],
    declarations: [HomeComponent,
                   GoodListComponent,
                   GoodAddComponent,
                   GoodParameterComponent],
    providers: [GoodService]
})
export class HomeModule { }