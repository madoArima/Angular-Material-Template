import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Board1Component } from './board1/board1.component';
import { Board2Component } from './board2/board2.component';
import { PATH } from '../shared/pathRounting';

const routes: Routes = [
  { path:PATH._BOARD_1, component:Board1Component },
  { path:PATH._BOARD_2, component:Board2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
