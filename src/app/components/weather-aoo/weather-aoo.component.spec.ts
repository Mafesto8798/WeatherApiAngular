import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAooComponent } from './weather-aoo.component';

describe('WeatherAooComponent', () => {
  let component: WeatherAooComponent;
  let fixture: ComponentFixture<WeatherAooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
