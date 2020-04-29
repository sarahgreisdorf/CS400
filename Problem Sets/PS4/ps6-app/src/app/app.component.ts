import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
  weather: any;

  cityName: FormControl = new FormControl('');

  constructor(private wx: WeatherService, private form: FormBuilder) {
  }

  location = this.form.group({
    cityName: [''],
  })

  getWeather() {
    this.cityName.setValue('Name');

    this.wx.getWeather().subscribe(
      response => {
        this.weather = response['main']['temp'];
      }

    )
  }
}
