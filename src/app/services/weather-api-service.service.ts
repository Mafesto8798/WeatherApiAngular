import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather-api';
@Injectable({
  providedIn: 'root',
})
export class WeatherApiServiceService {
  constructor(private httpClient: HttpClient) {}

  fetchWeather(): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(
      'https://api.weather.gov/gridpoints/DTX/65,33/forecast'
    );
  }
}
