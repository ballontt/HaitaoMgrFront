import { Component, OnInit } from '@angular/core';

import { GoodService } from './service/good.service';
import { Good } from './service/data-structure';
import { Message } from 'primeng/primeng';

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
    operatorResult: Message[] = [];
  
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
                this.goods = <Good[]>res.tbList;
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
                        this.operatorResult.push({severity:'success', summary:'删除成功', detail:'删除商品记录成功'});
                    }else{
                        this.operatorResult.push({severity:'error', summary:'删除失败', detail:'删除商品记录失败'});
                    }
                });
         }
     }

}