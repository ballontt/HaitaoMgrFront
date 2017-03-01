import { Component, OnInit } from '@angular/core';

import { CatParameter, Parameter } from './service/data-structure';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { GoodService } from './service/good.service';
import { Message } from 'primeng/primeng'

@Component({
    moduleId: module.id,
    selector: 'good-parameter',
    templateUrl: 'good-parameter.component.html',
    styleUrls: ['good-parameter.component.css']
})
export class GoodParameterComponent implements OnInit {

    catParameters: CatParameter[];
    selectedCats: CatParameter[];
    pageTotal: number;
    pageNo: number;
    isConfirmPop: Boolean = false;
    addModal: Boolean = false;
    cid:number;
    parameters: any[] = [
        //格式：{ group: "主体", params: [{k:"参数"}],{}}
    ];
    saveResult: Message[] = [];

    date:Date;

    constructor(private goodServie: GoodService) { }

    ngOnInit() {
        this.getCatParameters(1);
    }

    //获取规格参数列表
    getCatParameters(page: number): void {
        this.goodServie.getCatParameters(page, 20)
            .then(res => {
                console.log(res);
                if (res.success) {
                    this.pageTotal = res.data.totalPage;
                    this.pageNo = res.data.currentPage;
                    this.catParameters = <CatParameter[]>res.data.tbList;
                }
            });
    }
    //页面跳转
    toPage(page: number) {
        if (page <= this.pageTotal && page >= 1) {
            this.getCatParameters(page);
            window.scrollTo(0, 0);
        }
    }

    //删除规格参数记录
    deleteCatParams() {
        if (this.selectedCats != null) {
            let selectedCatsId: Array<number> = new Array<number>();
            for (let cat of this.selectedCats) {
                selectedCatsId.push(cat.id);
            }

            this.goodServie.deleteCatParams(selectedCatsId)
                .then(isSuccess => {
                    if (isSuccess) {
                        this.selectedCats = null;
                        this.toPage(this.pageNo);
                        this.saveResult.push({severity:'success', summary:'删除成功', detail:'删除规格参数记录成功'});

                    } else {
                        this.saveResult.push({severity:'error', summary:'删除失败', detail:'删除规格参数记录失败'});
                    }
                })
        }
    }
    showConfirm() {
        if (this.selectedCats.length > 0) {
            this.isConfirmPop = true;
        }
    }
    hideConfirm() {
        this.isConfirmPop = false;
    }


    //添加规格参数输入框
    appendParameter(index:number) {
        this.parameters[index].params.push({k:''});
    }
    appendGroup() {
        this.parameters.push({group:'',params:[{k:''}]});
    }
    saveCatParams() {
        //把数组转换为字符串
        this.goodServie.saveCatParams(this.cid,JSON.stringify(this.parameters))
                .then(isSuccess=>{
                    if(isSuccess){
                        this.saveResult.push({severity:'success', summary:'保存成功', detail:'新增一条规格参数'});
                        this.addModal = false;
                        this.toPage(this.pageNo);
                    }else{
                        this.saveResult.push({severity:'error', summary:'保存失败', detail:'规格参数记录未保存成功'});
                    }
                })
        //刷新当前列表
    }
    afterHide() {
        this.cid = null;
        this.parameters = [];
    }
    hideModal() {
        this.cid = null;
        this.parameters = [];
        this.addModal = false;
    }
    showModal() {
        this.addModal = true;
    }
}