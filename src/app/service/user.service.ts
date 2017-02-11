import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class UserService {
    private loggedIn = false;
    redirectUrl:String;

    constructor(private http:Http) { 
        this.loggedIn = !!localStorage.getItem('haitao_auth_token');
    }

    login(userName:String,password:String){
        let headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http
           .post('http://localhost:8086/user/login',
                {userName,password},
                {headers}
        )
        .map(res =>res.json())
        .map(res=>{
            if(res.success){
                localStorage.setItem('haitao_auth_token',res.data);
                this.loggedIn = true;
            }
            return res.success;
        });
    }

    logout() {
        localStorage.removeItem('haitao_auth_token');
    }

    isLoggedIn() {
        if(localStorage.getItem('haitao_auth_token')){
            return true;
        }

    }
}