import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from './models/PeriodicElement';

import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTrack: string = '';
  data: PeriodicElement[];

  tracks: {id: string, name: string}[] = [
    {id: '0', name: 'Advanced Analytics'},
    {id: '1', name: 'BlockChain'},
    {id: '2', name: 'Mobility and AR/VR'},
    {id: '3', name: 'Smart City'},
    {id: '4', name: 'Smart Plant and IIoT'},
  ]

  constructor(private service: BackendService){}

  ngOnInit() {

    this.service.getData(1).subscribe(
      data => {
        this.data = data;
        console.log('got data', this.data);
      },
      err => {
        console.error(err);
      }
    )
  }

  selectTrack(id: string) {
    this.selectedTrack = id;
  }

  unselectTrack() {
    this.selectedTrack = '';
  }

  getNextPage(pageNumber: number) {
    console.log('getting new page', pageNumber);
  }
}
