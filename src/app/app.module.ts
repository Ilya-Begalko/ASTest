import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import {
  DxSelectBoxModule,
  DxDataGridModule,
  DxButtonModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
