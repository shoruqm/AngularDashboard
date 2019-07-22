import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilaogExampleComponent } from './dilaog-example.component';

describe('DilaogExampleComponent', () => {
  let component: DilaogExampleComponent;
  let fixture: ComponentFixture<DilaogExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilaogExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilaogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
