import { Component, OnInit, ViewChild } from '@angular/core';
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
  item: string;
  displayedColumns: string[] = ['position', 'item', 'type', 'division', 'CAD', 'actions'];
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

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, item: '3D modeling Visualization using AR/VR', type: "AR/VR", division: 'BI & mobile App DIV', CAD: "M", details: ""},
  { position: 2, item: 'Anytime Learning through Mobile', type: "Mobility", division: 'Human Res & Payroll DIV', CAD: "O", details: ""},
  { position: 3, item: 'Automate Admin Activities', type: "RPA", division: 'Human Res & Payroll DIV', CAD: "O", details: ""},


];

