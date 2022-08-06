import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarZapatosComponent } from './buscar-zapatos.component';

describe('BuscarZapatosComponent', () => {
  let component: BuscarZapatosComponent;
  let fixture: ComponentFixture<BuscarZapatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarZapatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarZapatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
