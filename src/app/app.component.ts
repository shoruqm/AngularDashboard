import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from './models/PeriodicElement';

import { BackendService } from './services/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { DilaogAddComponent } from './dilaog-add/dilaog-add.component';

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

  constructor(private service: BackendService, public dialog: MatDialog, public ref: ChangeDetectorRef){}

  ngOnInit() {
  }

  getData(track: string) {
    this.service.getData(1, track).subscribe(
      data => {
        this.data = data;
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

  openDialog() {
    const dialogRef = this.dialog.open(DilaogAddComponent, {
      panelClass: 'my-full-screen-dialog',
      width: '1000px',
      height: '500px',
      data: {
        Type: this.selectedTrack
      }
    });

    dialogRef.afterClosed().subscribe(
      row => {
        if (row) {
          this.service.postRow(row).subscribe(
            item => {
              this.data.push(item);
              this.ref.detectChanges();
            },
            err => {
              console.error(err);
            }
          )
        } else {
          // close without data
        }
      }
    )
  }

  getNextPage(pageNumber: number) {
    console.log('getting new page', pageNumber);
  }
}
