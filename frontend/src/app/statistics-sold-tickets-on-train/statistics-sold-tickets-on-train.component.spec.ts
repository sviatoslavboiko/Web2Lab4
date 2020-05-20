import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsSoldTicketsOnTrainComponent } from './statistics-sold-tickets-on-train.component';

describe('StatisticsSoldTicketsOnTrainComponent', () => {
  let component: StatisticsSoldTicketsOnTrainComponent;
  let fixture: ComponentFixture<StatisticsSoldTicketsOnTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsSoldTicketsOnTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsSoldTicketsOnTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
