import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DilaogExampleComponent } from 'src/app/dilaog-example/dilaog-example.component'
import { PeriodicElement } from '../models/PeriodicElement';


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
  displayedColumns: string[] = ['position', 'item', 'type', 'division', 'CAD', 'actions'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
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

  callNextPage() {
    this.getNextPage.emit(1);
  }
}