import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from './models/PeriodicElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Project TEST';
  data: PeriodicElement[];

  constructor(){}

  ngOnInit() {
    this.data = ELEMENT_DATA; // subscribe to observable from the service
  }

  getNextPage(pageNumber: number) {
    console.log('getting new page', pageNumber);
  }
}
