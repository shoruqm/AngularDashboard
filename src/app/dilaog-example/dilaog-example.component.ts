import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../models/PeriodicElement';

@Component({
  selector: 'app-dilaog-example',
  templateUrl: './dilaog-example.component.html',
  styleUrls: ['./dilaog-example.component.scss']
})


export class DilaogExampleComponent implements OnInit {

  elementData: PeriodicElement[] = [];
  displayedColumns: string[] = ['Name'];

  constructor(
    public dialogRef: MatDialogRef<DilaogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.elementData.push(data.element);

      console.log('data', this.elementData);
    }

  ngOnInit() {
  }
}
