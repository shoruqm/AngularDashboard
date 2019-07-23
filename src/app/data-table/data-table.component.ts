import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DilaogExampleComponent } from 'src/app/dilaog-example/dilaog-example.component'
import { PeriodicElement, ELEMENT_DATA } from '../models/PeriodicElement';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTable implements OnInit {
  item: string;
  displayedColumns: string[] = ['position', 'item', 'type', 'division', 'CAD','status','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

  }

  constructor(public dialog: MatDialog) { }


  openDialog(element: PeriodicElement) {
    this.dialog.open(DilaogExampleComponent, {
      panelClass: 'my-full-screen-dialog',
      data: {
        element: element
      }
    });
  }
  
  
}
