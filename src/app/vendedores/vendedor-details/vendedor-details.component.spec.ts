import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorDetailsComponent } from './vendedor-details.component';

describe('VendedorDetailsComponent', () => {
  let component: VendedorDetailsComponent;
  let fixture: ComponentFixture<VendedorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
