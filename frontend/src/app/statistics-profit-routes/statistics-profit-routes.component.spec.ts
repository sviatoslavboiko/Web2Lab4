import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsProfitRoutesComponent } from './statistics-profit-routes.component';

describe('StatisticsProfitRoutesComponent', () => {
  let component: StatisticsProfitRoutesComponent;
  let fixture: ComponentFixture<StatisticsProfitRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsProfitRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsProfitRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
