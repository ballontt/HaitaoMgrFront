import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.component.html',
    styleUrls:['topnav.component.css']
})
export class TopNavComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    public toggled(open:boolean):void {
        console.log("aa");
    }
}