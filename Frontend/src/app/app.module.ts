import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { CardComponent } from './property/card/card.component';
import { NavBarComponent } from './property/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    CardComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
