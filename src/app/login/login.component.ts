import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService} from '../service/user.service'

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css']

})

@Injectable()
export class LoginComponent implements OnInit {
    model:any = {};

    constructor(private userServie:UserService,
                private router:Router ) { }

    ngOnInit() { }
    onSubmit() {
         this.userServie.login(this.model.username,this.model.password).subscribe(res=>{
             if(res) {
                 let redirect = this.userServie.redirectUrl ? this.userServie.redirectUrl:'/home';
                 this.router.navigate([redirect]);
             }
         });
    }
}