import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilaogAddComponent } from './dilaog-add.component';

describe('DilaogAddComponent', () => {
  let component: DilaogAddComponent;
  let fixture: ComponentFixture<DilaogAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilaogAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilaogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
