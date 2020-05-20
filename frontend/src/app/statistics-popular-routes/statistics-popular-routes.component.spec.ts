import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPopularRoutesComponent } from './statistics-popular-routes.component';

describe('StatisticsPopularRoutesComponent', () => {
  let component: StatisticsPopularRoutesComponent;
  let fixture: ComponentFixture<StatisticsPopularRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsPopularRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsPopularRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
