/*import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DilaogExampleComponent } from 'src/app/dilaog-example/dilaog-example.component'
import { PeriodicElement, ELEMENT_DATA } from '../models/PeriodicElement';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * @title Table with pagination
 
@Component({
  selector: 'app-data-table2',
  styleUrls: ['data-table2.component.scss'],
  templateUrl: 'data-table2.component.html',
})
export class DataTable2 implements OnInit {
  item: string;
  displayedColumn: string[] = ['desc','impact','proponent','ispro','fund','theme','start','end','cost','NPV','NPVJ','DT','BP','demand','note','update',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

  }

  constructor(public dialog: MatDialog) { }


  openDialog(element: PeriodicElement) {
    this.dialog.open(DilaogExampleComponent, {
      width: '450px',
      height: '400px',
      data: {
        element: element
      }
    });
  }
  
  
}
*/


