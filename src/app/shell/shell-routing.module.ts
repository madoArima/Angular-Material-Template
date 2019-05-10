import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PATH } from '../shared/pathRounting';
import { ShellComponent } from './shell.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children:[
      {
        path:PATH._HOME, component:HomeComponent
      },

      /** lazy loading paths */
     {
        path:PATH._DASHBOARD, loadChildren:'../dashboard/dashboard.module#DashboardModule'
      },
      {
        path:PATH._FORMS, loadChildren:'../forms/forms.module#FormsModule'
      },
      {
        path:PATH._TABLES, loadChildren:'../tables/tables.module#TablesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
