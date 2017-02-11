import { CommonModule } from '@angular/common';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';

import { TopNavComponent }   from './topnav/topnav.component';
import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [CommonModule,
              DropdownModule.forRoot(),
              RouterModule],
    declarations: [TopNavComponent,
                   SideBarComponent],
    exports:[TopNavComponent,
             SideBarComponent],
    providers: []
})
export class SharedModule{ }
