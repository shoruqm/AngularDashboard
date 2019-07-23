import { Component } from '@angular/core';
import { ELEMENT_DATA } from './models/PeriodicElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Project TEST';
  data = ELEMENT_DATA;

  constructor(){}

  getNextPage(pageNumber: number) {
    console.log('getting new page', pageNumber);
  }
}
