import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [MatButtonModule,
     MatCheckboxModule,
     MatTableModule,
     MatToolbarModule,
     MatIconModule,
     MatExpansionModule,
     MatTabsModule,
     MatSelectModule,
     MatAutocompleteModule
    ],
  exports: [MatButtonModule,
     MatCheckboxModule,
     MatTableModule,
     MatToolbarModule,
     MatIconModule,
     MatExpansionModule,
     MatTabsModule,
     MatSelectModule,
     MatAutocompleteModule
    ],
})
export class MaterialModule { }