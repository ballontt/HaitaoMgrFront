import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'side-bar',
    templateUrl: 'sidebar.component.html',
    styleUrls:['sidebar.component.css']
})
export class SideBarComponent implements OnInit {
    goodIsExpand:boolean = false;
    contentIsExpand:boolean = false;

    constructor() { }

    ngOnInit() { }
    
    reverseExpand(expandItem:String) {
        switch(expandItem){
            case 'good':
                this.goodIsExpand = !this.goodIsExpand;
                break;
            case 'content':
                this.contentIsExpand = !this.contentIsExpand;
                break;
            default:
                break;
        }
    }
}