import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoListComponent } from './descuento-list.component';

describe('DescuentoListComponent', () => {
  let component: DescuentoListComponent;
  let fixture: ComponentFixture<DescuentoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
