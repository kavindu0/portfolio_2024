import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JsComponent } from './components/js/js.component';
import { V8engineComponent } from './components/js/v8engine/v8engine.component';
import { V8engineContComponent } from './components/js/v8engine/v8engine-cont/v8engine-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsComponent,
    V8engineComponent,
    V8engineContComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
