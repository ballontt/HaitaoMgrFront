import { Http, Headers }       from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Good }       from './good';

@Injectable()
export class GoodService {
    private goodListUrl = 'http://localhost:8086/item/list';
    private totalPages: number = null;
    private headers = new Headers({'Content-Type': 'application/json'});
    

    constructor(private http: Http) {}

    getGoods(page: number, rows: number):Promise<Good[]> {
        const url = `${this.goodListUrl}?page=${page}&rows=${rows}`;
        return this.http.get(url,{headers:this.headers})
                .toPromise()
                .then(res=>res.json())
                .then(res=>{
                   this.totalPages = res.totalPage;
                   return res.tbItemlist as Good[] ;
                })
                .catch(this.handlerError);
    }

    getTotalPages() {
        return this.totalPages;
    }

    private handlerError(error:any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}