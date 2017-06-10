import { MockFundsService } from './funds/mock-fundsService/mock-funds.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { HttpModule } from '@angular/http';
import {DataTableModule, SharedModule, DialogModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { FundsServiceService } from './funds/funds-service.service';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
     HttpModule,
    DataTableModule,
    DialogModule
  ],
  providers: [
    FundsServiceService,
    MockFundsService,
   /* MockBackend,
    BaseRequestOptions,
        {
            provide: Http,
            deps: [MockBackend, BaseRequestOptions],
            useFactory: (backend: MockBackend, options: BaseRequestOptions) => { return new Http(backend, options); }
        }*/
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
