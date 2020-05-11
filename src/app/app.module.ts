import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';
import { IpInfoComponent } from './ip-info/ip-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent,
    IpInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
