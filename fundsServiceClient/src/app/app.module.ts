import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule, SharedModule, DialogModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { FundsServiceService } from "./funds/funds-service.service";

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    DialogModule 
  ],
  providers: [FundsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
