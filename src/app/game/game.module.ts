import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { GearlocSkillsComponent } from './gearloc-skills/gearloc-skills.component';

@NgModule({
  declarations: [
    GameComponent,
    GearlocSkillsComponent
  ],
  imports: [
    BrowserModule,
    GameRoutingModule
  ],
  providers: []
})
export class GameModule { }
