import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceupdaterComponent } from './priceupdater.component';

describe('PriceupdaterComponent', () => {
  let component: PriceupdaterComponent;
  let fixture: ComponentFixture<PriceupdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceupdaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceupdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
