import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { 
          MatInputModule, MatSelectModule,MatCardModule,
          MatListModule, MatTableModule, MatPaginatorModule,
          MatSortModule, MatGridListModule, MatMenuModule,
          MatToolbarModule,MatSidenavModule, MatRadioModule,
          MatTreeModule, MatIconModule, MatButtonModule,
          MatBadgeModule, MatFormFieldModule
        } from '@angular/material';

const modulos = [
  CommonModule, MatToolbarModule, MatSidenavModule, MatRadioModule,
  MatTreeModule, MatIconModule, MatButtonModule, MatBadgeModule,
  MatInputModule, MatSelectModule, MatCardModule, MatListModule, 
  MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule,
  MatMenuModule, MatFormFieldModule, MatGridListModule, MatCardModule,
  MatMenuModule, MatIconModule, MatButtonModule, LayoutModule
];

@NgModule({
  declarations: [],
  imports: [modulos],
  exports: [modulos]
})
export class MaterialModule { }
