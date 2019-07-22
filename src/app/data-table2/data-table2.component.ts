import {Component, OnInit, ViewChild, Inject} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DilaogExampleComponent } from 'src/app/dilaog-example/dilaog-example.component'
export interface Periodic {
  name:string;
  age:number

}
const ELEMENT_DATA: Periodic[] = [
  {name: "SH", age:12},
  {name: "gg", age:4},
  {name: "ggg", age:2},
 
  
];
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-data-table2',
  styleUrls: ['data-table2.component.scss'],
  templateUrl: 'data-table2.component.html',
})
export class DataTable2 {
  
 
  displayedColumn: string[] = ['name', 'age'];
  datasource = new MatTableDataSource<Periodic>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  openDialog(element){
    const dialogRef = this.dialog.open(DilaogExampleComponent, {
      width: '350px',
      height: '300px',
      data: {name: element.name, age: element.age}
    });
  }
  //iscollapsed:boolean = true;

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
/*toggleCollapsed(){
  this.iscollapsed = !this.iscollapsed;
}*/
 /* ngOnInit() {
    //this.datasource.paginator = this.paginator;
  }*/
  
}
@Component({
  selector: 'app-data-table2',
  templateUrl: 'data-table2.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Periodic) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}




