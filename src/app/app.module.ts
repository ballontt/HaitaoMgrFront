import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { Router } from '@angular/router';

import { routing } from './app.routing';

import { HomeModule } from './home/home.module';

import { AppComponent }  from './app.component';

import { LoginComponent } from './login/login.component';
import { UserService} from './service/user.service';
import { LoggedInGuard } from './service/logged-in.guard';


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  HomeModule,
                  FormsModule,
                  routing
  ],
  declarations: [ AppComponent,
                  LoginComponent
  ],
  providers:    [ UserService,
                  LoggedInGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
