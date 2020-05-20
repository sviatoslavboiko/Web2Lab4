import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsTrainsWithoutTicketsComponent } from './statistics-trains-without-tickets.component';

describe('StatisticsTrainsWithoutTicketsComponent', () => {
  let component: StatisticsTrainsWithoutTicketsComponent;
  let fixture: ComponentFixture<StatisticsTrainsWithoutTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsTrainsWithoutTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsTrainsWithoutTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
