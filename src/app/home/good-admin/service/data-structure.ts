export class Good {
    id: number;
    title: String;
    sellPoint: String;
    price: number;
    num: number;
    barcode: String;
    cid: number;
    status: number;
    created: String;
    updated: String;
}

export class CatParameter {
    id: number;
    itemCatId: number;
    paramData: String;
    created: String;
    updated: String;
}

export class Parameter {
    group:String;
    params:String[];
}