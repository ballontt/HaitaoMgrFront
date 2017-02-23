import { Component, OnInit } from '@angular/core';

import { GoodService } from './service/good.service';
import { Good } from './service/good';

@Component({
    moduleId: module.id,
    selector: 'good-list',
    templateUrl: 'good-list.component.html',
    styleUrls:['good-list.component.css']
})
export class GoodListComponent implements OnInit {
    goods: Good[];
    selectedGoods: Good[];
    pageTotal:number;
    pageNo:number;
    isConfirmPop:Boolean = false;
  
    constructor(private goodService: GoodService) { }

    ngOnInit() {
       
       this.getGoods(1);
     }

     showConfirm() {
        if(this.selectedGoods.length > 0){
            this.isConfirmPop = true;
        }
    }

    hideConfirm() {
        this.isConfirmPop = false;
    }

     getGoods(page:number): void {
        this.goodService.getGoods(page,20)
            .then(res=>{
                this.pageTotal = res.totalPage;
                this.pageNo = res.currentPage;
                this.goods = <Good[]>res.tbItemlist;
            });
     }

     toPage(page:number) {
         if(page<=this.pageTotal && page>=1){
             this.getGoods(page);
             window.scrollTo(0,0);
         }
     }

     deleteGoods() {
         if(this.selectedGoods!= null) {
             let selectedGoodsId:Array<number> = new Array();
             for(let good of this.selectedGoods) {
                 selectedGoodsId.push(good.id);
             }

             this.goodService.deleteGoods(selectedGoodsId)
                .then(isSuccess=>{
                    if(isSuccess) {
                        this.selectedGoods = null;
                        this.toPage(this.pageNo);
                    }else{
                        alert("删除失败");
                    }
                });
         }
     }

}