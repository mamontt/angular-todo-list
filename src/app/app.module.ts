import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { StoreComponent } from './app.component';
import { EnterComponent } from './input.component';
import { PrintComponent } from './output.component';


@NgModule({
  declarations: [
    StoreComponent,
    EnterComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EnterComponent]
})
export class AppModule { }
