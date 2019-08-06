import { Component, OnInit, ViewChild, Output, Input, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DilaogExampleComponent } from 'src/app/dilaog-example/dilaog-example.component'
import { PeriodicElement } from '../models/PeriodicElement';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTable implements OnInit, OnChanges {
  @Input() data: PeriodicElement[];
  @Input() type: string;
  @Output() getNextPage: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  item: string; 
  displayedColumns: string[] = ['No', 'Item', 'Type', 'Division', 'CAD_SME', 'Status', 'actions'];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(public dialog: MatDialog, public changeDetectorRefs: ChangeDetectorRef) { }
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes) {
    console.log('updateing', this.data);
    if (this.dataSource) {
      this.dataSource.data = this.data;
    } else {
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
    }
    this.changeDetectorRefs.detectChanges();
  }

  openDialog(element: PeriodicElement) {
    this.dialog.open(DilaogExampleComponent, {
      panelClass: 'my-full-screen-dialog',
      width: '1000px',
      height: '500px',
      data: {
        element: element
      }
    });
  }

  callNextPage() {
    this.getNextPage.emit(1);
  }

}
