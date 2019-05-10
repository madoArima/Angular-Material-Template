import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { ShellRoutingModule } from './shell-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module'



@NgModule({
  declarations: [
    ShellComponent,
    HomeComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,     
    FlexLayoutModule,
    ReactiveFormsModule, 
    MaterialModule
  ]
})
export class ShellModule { }
