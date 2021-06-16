import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatDataService } from './chat-data.service';
// import { EmpserviceService } from './services/empservice.service'
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
    
  ],
  providers: [ChatDataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
