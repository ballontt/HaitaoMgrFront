import { Component, OnInit } from '@angular/core';

import { GoodService } from './service/good.service';
import { Good } from './service/good';

@Component({
    moduleId: module.id,
    selector: 'good-list',
    templateUrl: 'good-list.component.html'
})
export class GoodListComponent implements OnInit {
    goods: Good[];
    constructor(private goodService: GoodService) { }

    ngOnInit() {
       this.getGoods(1,20);
     }

     getGoods(page:number, rows: number): void {
        this.goodService.getGoods(page,rows)
            .then(goods => this.goods = goods);
     }
}