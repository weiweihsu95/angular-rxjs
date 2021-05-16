import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalulatorComponent } from './calulator/calulator.component';
import {FormsModule} from "@angular/forms";
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalulatorComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
