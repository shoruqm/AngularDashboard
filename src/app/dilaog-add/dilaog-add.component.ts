import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../models/PeriodicElement';

@Component({
  selector: 'app-dilaog-add',
  templateUrl: './dilaog-add.component.html', 
  styleUrls: ['./dilaog-add.component.scss']
})
export class DilaogAddComponent implements OnInit {

  row: PeriodicElement;
  constructor( public dialogRef: MatDialogRef<DilaogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if (data && data.Type) {
        this.row = {
          No: null,
          Item: '',
          Type: data.Type,
          Description: '',
          Impact_Reamars_Comments: '',
          Division: '',
          Proponent: '',
          is_Proponent_involve: '',
          Fund_Source: '',
          CAD_SME: '',
          Theme: '',
          start: '',
          end: '',
          cost: 0,
          NPV: '',
          NPV_Justification: '',
          DT_Item: '',
          BP_Item: '',
          Demand: '',
          Note: '',
          Status: '',
          Last_Update: '',
        };
      }
    }

  ngOnInit() {
  }

@Input()
checked: Boolean 

  close(submit = false) {
    if (submit) {
      this.dialogRef.close(this.row);
    } else {
      this.dialogRef.close();
    }
  }
  

}

