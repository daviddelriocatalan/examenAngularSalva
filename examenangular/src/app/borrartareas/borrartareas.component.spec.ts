import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrartareasComponent } from './borrartareas.component';

describe('BorrartareasComponent', () => {
  let component: BorrartareasComponent;
  let fixture: ComponentFixture<BorrartareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrartareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrartareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
