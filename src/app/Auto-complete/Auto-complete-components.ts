import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, debounceTime} from 'rxjs/operators';
import { PeriodicElement } from '../models/PeriodicElement';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'auto-complete-components',
  templateUrl: 'Auto-complete-compoments.html',
  styleUrls: ['Auto-complete-components.scss'],
})
export class AutocompleteFilterExample implements OnInit {
  @Input() data: PeriodicElement[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(1000),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.data ? this.data.filter((element) => {
      return element.Item.toLowerCase().includes(filterValue)
        // || element.type.toLowerCase().includes(filterValue);
    }).map((element) => {
      return element.Item;
    }) : [];
  }
}
