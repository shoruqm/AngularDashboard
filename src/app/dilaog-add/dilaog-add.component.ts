import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dilaog-add',
  templateUrl: './dilaog-add.component.html',
  styleUrls: ['./dilaog-add.component.scss']
})
export class DilaogAddComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DilaogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log('data', this.data);
    }

  ngOnInit() {
  }

}

