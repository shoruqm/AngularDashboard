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
    {id: 'Mobility', name: 'Mobility'},
    {id: 'RPA', name: 'RPA'},
    {id: 'AR-VR', name: 'AR/VR'},
    {id: 'Chatbot',name: 'Chatbot'}
  ]

  constructor(private service: BackendService){}

  ngOnInit() {
  }

  getData(track: string) {
    this.service.getData(1, track).subscribe(
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
    this.getData(this.selectedTrack);
  }

  getTrackName(): string {
    return this.tracks.find(t => t.id == this.selectedTrack).name;
  }

  unselectTrack() {
    this.selectedTrack = '';
  }

  getNextPage(pageNumber: number) {
    console.log('getting new page', pageNumber);
  }
}
