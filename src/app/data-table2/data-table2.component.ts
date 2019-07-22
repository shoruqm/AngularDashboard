import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-data-table2',
  styleUrls: ['data-table2.component.scss'],
  templateUrl: 'data-table2.component.html',
})
export class DataTable2 implements OnInit {
  item: string;
  displayedColumn: string[] = ['name', 'age'];
  datasource = new MatTableDataSource<Periodic>(ELEMENT_DATA);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.datasource.paginator = this.paginator;
  }
}

export interface Periodic {
  name:string;
  age:number

}

const ELEMENT_DATA: Periodic[] = [
  {name: "SH", age:12},
  {name: "gg", age:4},
  {name: "ggg", age:2},
 
  
];
