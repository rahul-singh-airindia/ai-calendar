import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthComponent } from 'src/components/month/month.component';
import { HeaderComponent } from 'src/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
