import { Component, Input, OnInit } from '@angular/core';
import { Period } from 'src/app/models/weather-api';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
})
export class WeatherItemComponent implements OnInit {
  @Input() period?: Period;
  constructor() {}

  ngOnInit(): void {}
}
