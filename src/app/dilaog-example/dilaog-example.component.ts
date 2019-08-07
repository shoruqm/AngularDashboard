import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement,ELEMENT_DATA } from '../models/PeriodicElement';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dilaog-example',
  templateUrl: './dilaog-example.component.html',
  styleUrls: ['./dilaog-example.component.scss']
})


export class DilaogExampleComponent implements OnInit {

  elementData: PeriodicElement;;
  constructor(
    public dialogRef: MatDialogRef<DilaogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.elementData = data.element;
    }

  ngOnInit() {
  }
}
