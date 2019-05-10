import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { Table2Component } from './table2/table2.component';
import { Table1Component } from './table1/table1.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [Table2Component, Table1Component],
  imports: [
    CommonModule,
    TablesRoutingModule,    
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class TablesModule { }  
