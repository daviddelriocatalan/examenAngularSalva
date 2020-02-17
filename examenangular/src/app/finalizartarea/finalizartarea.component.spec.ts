import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizartareaComponent } from './finalizartarea.component';

describe('FinalizartareaComponent', () => {
  let component: FinalizartareaComponent;
  let fixture: ComponentFixture<FinalizartareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizartareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
