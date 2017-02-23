import { Http, Headers }       from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Good }       from './good';


@Injectable()
export class GoodService {
    private goodListUrl = 'http://localhost:8086/item/list';
    private goodDeleteUrl = 'http://localhost:8086/item/deletions';
    private goodCatTreeListUrl = 'http://localhost:8086/itemCat/list';
    private headers = new Headers({'Content-Type': 'application/json'});
    

    constructor(private http: Http) {}

    getGoods(page: number, rows: number) {
        const URL = `${this.goodListUrl}?page=${page}&rows=${rows}`;
        return this.http.get(URL,{headers:this.headers})
                .toPromise()
                .then(res=>res.json())
                .catch(this.handlerError);
    }

    getGoodsCat() {
        const URL = `${this.goodCatTreeListUrl}`;
        return this.http.get(URL,{headers:this.headers})
                .toPromise()
                .then(res=>res.json())
                .catch(this.handlerError);
    }

    deleteGoods(goodsId:number[]):Promise<Boolean> {
        let Url = this.goodDeleteUrl;
        for(let goodIdIndx in goodsId) {
            let goodId = goodsId[goodIdIndx];
            if(goodIdIndx === '0'){
                Url = `${Url}?tbItemList[0]=${goodId}`
            }else{
                Url = `${Url}&tbItemList[${goodIdIndx}]=${goodId}`;
            }
        }
        return this.http.delete(Url)
                .toPromise()
                .then(res=>res.json())
                .then(res=>{
                    if(res.success){
                        return true;
                    }
                    return false;
                })
                .catch(this.handlerError);
    }

    private handlerError(error:any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}