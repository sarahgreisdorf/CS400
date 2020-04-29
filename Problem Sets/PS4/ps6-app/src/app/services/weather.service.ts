import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getWeather() {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bf1b846977ea507d0efa64556f0b2d37`)

  }

  constructor(private http: HttpClient) { }
}
