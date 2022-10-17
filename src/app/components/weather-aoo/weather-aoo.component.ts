import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/models/weather-api';
import { WeatherApiServiceService } from 'src/app/services/weather-api-service.service';
@Component({
  selector: 'app-weather-aoo',
  templateUrl: './weather-aoo.component.html',
  styleUrls: ['./weather-aoo.component.css'],
})
export class WeatherAooComponent implements OnInit {
  constructor(private weatherApiService: WeatherApiServiceService) {}

  periods: Period[] = [];

  ngOnInit(): void {
    this.weatherApiService.fetchWeather().subscribe((data) => {
      this.periods = data.properties.periods;
      console.log(this.periods);
    });
  }
}
