import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { Board2Component } from './board2/board2.component';
import { Board1Component } from './board1/board1.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [Board2Component, Board1Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,     
    MaterialModule
  ] 
})
export class DashboardModule { }
