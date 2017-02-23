import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// primeNG
import { DataTableModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule} from 'primeng/primeng';

// ng-bootstrap
import { HomeRoutingModule } from './home.routing';
import { HomeComponent }   from './home.component';
import { GoodListComponent } from './good-admin/good-list.component';
import { GoodAddComponent } from './good-admin/good-add.component';
import { GoodService } from './good-admin/service/good.service';
import { PopoverModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SharedModule } from '../shared/Shared.module';

@NgModule({
    imports: [CommonModule,
              DataTableModule,
              EditorModule,
              FormsModule,
              FileUploadModule,
              HomeRoutingModule,
              TreeTableModule,
              TreeModule,
              SharedModule,
              PopoverModule.forRoot()],
    exports: [],
    declarations: [HomeComponent,
                   GoodListComponent,
                   GoodAddComponent],
    providers: [GoodService]
})
export class HomeModule { }