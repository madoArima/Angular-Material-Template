import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { Form2Component } from './form2/form2.component';
import { Form1Component } from './form1/form1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module'

@NgModule({
  declarations: [Form2Component, Form1Component],
  imports: [
    CommonModule,
    FormsRoutingModule,    
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class FormsModule { }
