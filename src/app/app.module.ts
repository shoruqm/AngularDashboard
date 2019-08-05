import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTable } from "src/app/data-table/data-table.component";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
//import { DataTable2 } from './data-table2/data-table2.component';
import { DilaogExampleComponent } from './dilaog-example/dilaog-example.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AutocompleteFilterExample } from './Auto-complete/Auto-complete-components';
import { MatInputModule } from '@angular/material';
import { SearchPipePipe } from './search-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DilaogAddComponent } from './dilaog-add/dilaog-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTable,
    //DataTable2,
    DilaogExampleComponent,
    AutocompleteFilterExample,
    SearchPipePipe,
    DilaogAddComponent
  ],
  entryComponents:[DilaogExampleComponent, DilaogAddComponent],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
