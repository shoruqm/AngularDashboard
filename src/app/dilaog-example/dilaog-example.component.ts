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

  elementData: PeriodicElement[] = [];
  displayedColumn: string[] = ['desc','impact','proponent','ispro','fund','theme','start','end','cost','NPV','NPVJ','DT','BP','demand','note','update'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(
    public dialogRef: MatDialogRef<DilaogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.elementData.push(data.element);

      console.log('data', this.elementData);
    }

  ngOnInit() {
  }
}
