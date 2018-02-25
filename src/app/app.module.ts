import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { Dropdown } from "./dropdown.component";

import { DataServices } from "./Services/data.service";


@NgModule({
  declarations: [
    AppComponent,
    Dropdown
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
