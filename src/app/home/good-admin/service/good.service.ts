import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GoodService {
    private goodListUrl = 'http://localhost:8086/item/list';
    private goodDeleteUrl = 'http://localhost:8086/item/deletions';
    private goodCatTreeListUrl = 'http://localhost:8086/itemCat/list';
    private goodAddUrl = 'http://localhost:8086/item/addition';
    private catParametersListUrl = 'http://localhost:8086/parameter/list';
    private catParamsDeleteUrl = 'http://localhost:8086/parameter/deletions'
    private cataParamsAdditionUrl = 'http://localhost:8086/parameter/addition';
    private headers = new Headers({ 'Content-Type': 'application/json'});
    private formHeaders = new Headers({'Content-Type': 'application/x-www-form-urlencoded'})


    constructor(private http: Http) { }

    addGood(item: any) {
        const URL = `${this.goodAddUrl}`;
        return this.http.post(URL,item,{headers:this.headers})
                .toPromise()
                .then(res => res.json())
                .catch(this.handlerError);
    }

    getGoods(page: number, rows: number) {
        const URL = `${this.goodListUrl}?page=${page}&rows=${rows}`;
        return this.http.get(URL, { headers: this.headers })
            .toPromise()
            .then(res => res.json())          
            .catch(this.handlerError);
    }

    getGoodsCat() {
        const URL = `${this.goodCatTreeListUrl}`;
        return this.http.get(URL, { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handlerError);
    }

    deleteGoods(goodsId: number[]): Promise<Boolean> {
        let Url = this.goodDeleteUrl;
        for (let goodIdIndx in goodsId) {
            let goodId = goodsId[goodIdIndx];
            if (goodIdIndx === '0') {
                Url = `${Url}?tbItemList[0]=${goodId}`
            } else {
                Url = `${Url}&tbItemList[${goodIdIndx}]=${goodId}`;
            }
        }
        return this.http.delete(Url)
            .toPromise()
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    return true;
                }
                return false;
            })
            .catch(this.handlerError);
    }

  getCatParameters(page: number, rows: number) {
        const URL = `${this.catParametersListUrl}?page=${page}&rows=${rows}`;
        return this.http.get(URL, { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handlerError);
    }

    deleteCatParams(catParamsId:number[]) {
        let Url = this.catParamsDeleteUrl;
        for (let catParamsIdIndx in catParamsId) {
            let catParamId = catParamsId[catParamsIdIndx];
            if (catParamsIdIndx === '0') {
                Url = `${Url}?catParamList[0]=${catParamId}`
            } else {
                Url = `${Url}&catParamList[${catParamsIdIndx}]=${catParamId}`;
            }
        }
        return this.http.delete(Url)
            .toPromise()
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    return true;
                }
                return false;
            })
            .catch(this.handlerError);
    }

    saveCatParams(cid:number,parameterData:String) {
        let Url = this.cataParamsAdditionUrl;
        let body=`cid=${cid}&parameterData=${parameterData}`;
        return this.http.post(Url,body,{headers:this.formHeaders})
                     .toPromise()
                     .then(res => res.json())
                     .then(res => {
                         if(res.success) {
                             return true;
                         }
                         return false;
                     })
                     .catch(this.handlerError);
    }

    private handlerError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}