import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DilaogExampleComponent } from './dilaog-example/dilaog-example.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Project TEST';
  constructor(public dilaog:MatDialog){}
}
