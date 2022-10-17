import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherAooComponent } from './components/weather-aoo/weather-aoo.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';

@NgModule({
  declarations: [AppComponent, WeatherAooComponent, WeatherItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
