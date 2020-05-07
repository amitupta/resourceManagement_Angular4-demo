import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpModule} from'@angular/http';
import{FlashMessagesModule} from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import{AppRoutingModule} from './app.routing';

import { DemoComponentComponent } from './component/demo-component/demo-component.component';
import{DemoServiceService} from './service/demo-service.service';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import{LoginServiceService} from './service/login-service.service';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { IndexComponentComponent } from './component/index-component/index-component.component';
import { GetuserComponent } from './component/getuser/getuser.component';
import { GetuserService } from './service/getuser.service';

import { GetuserbyidService } from './service/getuserbyid.service';
import { GetuserByidComponent } from './component/getuser-byid/getuser-byid.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    IndexComponentComponent,
    GetuserByidComponent,
    GetuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AppRoutingModule
  ],
  providers: [DemoServiceService,LoginServiceService,GetuserService,GetuserbyidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
