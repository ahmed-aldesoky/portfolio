import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrtofolioComponent } from './prtofolio.component';

describe('PrtofolioComponent', () => {
  let component: PrtofolioComponent;
  let fixture: ComponentFixture<PrtofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrtofolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrtofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
