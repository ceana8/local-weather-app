import { Component, Input, OnInit } from '@angular/core';
import { Icurrentweather } from '../icurrentweather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

 @Input() current: Icurrentweather
 constructor(private weatherService: WeatherService) {
   this.current = {
     city: '',
     country: '',
     date: new Date(),
     image: '',
     temperature: 0,
     description:''
   }
 }

  ngOnInit(): void {}


}
