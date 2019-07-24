import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from './models/PeriodicElement';

import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Project TEST';
  data: PeriodicElement[];

  constructor(private service: BackendService){}

  ngOnInit() {
    // this.data = ELEMENT_DATA; // subscribe to observable from the service //testing

    this.service.getData(2).subscribe(
      data => {
        this.data = data;
      },
      /* data => {
        console.log('backend working', data);
      },*/ //testing

      err => {
        console.error(err);
      }
    )
  }

  getNextPage(pageNumber: number) {
    console.log('getting new page', pageNumber);
  }
}
