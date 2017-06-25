import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material'

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { GameModule } from 'app/game/game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    AppRoutingModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
