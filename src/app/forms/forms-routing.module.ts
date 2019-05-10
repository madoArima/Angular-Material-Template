import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PATH } from '../shared/pathRounting';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  { path:PATH._FORM_1, component:Form1Component },
  { path:PATH._FORM_2, component:Form2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
