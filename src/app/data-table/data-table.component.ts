import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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
  displayedColumns: string[] = ['position', 'item', 'type', 'division','CAD','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  item: string;
  position: number;
  type: string;
  division: string;
  CAD: string;
  details: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, item: '3D modeling Visualization using AR/VR', type: "AR/VR", division: 'BI & mobile App DIV',CAD:"M", details:""},
  {position: 2, item: 'Anytime Learning through Mobile', type: "Mobility", division: 'Human Res & Payroll DIV',CAD:"O" , details:""},
  {position: 3, item: 'Automate Admin Activities', type: "RPA", division: 'Human Res & Payroll DIV', CAD:"O",details:""},
  
  
];