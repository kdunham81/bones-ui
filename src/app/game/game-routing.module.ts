import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { GearlocSkillsComponent } from './gearloc-skills/gearloc-skills.component';

const gameRoutes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'skills', component: GearlocSkillsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(gameRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GameRoutingModule { }
