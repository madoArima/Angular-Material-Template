import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { PATH } from '../shared/pathRounting';

const routes: Routes = [
  { path:PATH._TABLE_1, component:Table1Component },
  { path:PATH._TABLE_2, component:Table2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
