import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatTableModule,MatToolbarModule,MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule,MatTableModule,MatToolbarModule,MatIconModule],
})
export class MaterialModule { }