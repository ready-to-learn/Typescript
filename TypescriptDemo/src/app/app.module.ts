import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicsComponent } from '../basics/basics.component';
import { BasicsDemoComponent } from '../basics-demo/basics-demo.component';
import { HomeComponent } from '../home/home.component';
import { MobileViewComponent } from '../mobile-view/mobile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    BasicsDemoComponent,
    HomeComponent,
    MobileViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
