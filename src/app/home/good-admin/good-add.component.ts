import { Component, OnInit } from '@angular/core';
import {TreeModule,TreeNode} from 'primeng/primeng';
import { GoodService } from './service/good.service';
import { Quill } from 'quill';


@Component({
    moduleId: module.id,
    selector: 'good-add',
    templateUrl: 'good-add.component.html',
    styleUrls:['good-add.component.css']
})

export class GoodAddComponent implements OnInit {

    photoUrls:String[] = [];
    descText:String;
    constructor(private goodService:GoodService) { }

    ngOnInit() {
     }
     onUpload(event:any) {
          let photoUrl = JSON.parse(event.xhr.response).url;
          this.photoUrls.push(photoUrl);
     }
}