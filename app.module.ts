import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import { ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
