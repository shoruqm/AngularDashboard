import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DilaogExampleComponent } from 'src/app/dilaog-example/dilaog-example.component'
import { PeriodicElement } from '../models/PeriodicElement';

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
  @Input() data: PeriodicElement[];
  @Output() getNextPage: EventEmitter<number> = new EventEmitter<number>();

  item: string;
  displayedColumns: string[] = ['position', 'item', 'type', 'division', 'CAD', 'status', 'actions'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
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

  callNextPage() {
    this.getNextPage.emit(1);
  }
}
