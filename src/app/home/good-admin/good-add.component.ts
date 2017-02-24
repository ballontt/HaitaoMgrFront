import { Component, OnInit } from '@angular/core';
import { TreeModule,TreeNode,Message } from 'primeng/primeng';
import { GoodService } from './service/good.service';
// import * as Quill from 'quill';


@Component({
    moduleId: module.id,
    selector: 'good-add',
    templateUrl: 'good-add.component.html',
    styleUrls:['good-add.component.css']
})

export class GoodAddComponent implements OnInit {

    photoUrls:String[] = [];
    item:any = {};
    saveResult: Message[] = [];
    
    constructor(private goodService:GoodService) { }

    ngOnInit() {
     }
     onUpload(event:any) {
          let photoUrl = JSON.parse(event.xhr.response).url;
          this.photoUrls.push(photoUrl);
          this.item.image = photoUrl;
     }
     onSubmit() {
         this.goodService.addGood(this.item)
            .then(res=>{
                if(res.success) {
                    this.item = {};
                    this.saveResult.push({severity:'success', summary:'保存成功', detail:'新增一条商品记录'});
                }else {
                    this.saveResult.push({severity:'error', summary:'保存失败', detail:'商品记录未成功保存'});
                }
            });
     }
}