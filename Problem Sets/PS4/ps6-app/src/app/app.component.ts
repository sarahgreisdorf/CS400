import { Component } from '@angular/core';
import { PLACES} from "./PLACES-MOCK";
import {PLACE} from './PLACE'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  places = PLACES;
  private selectedContact: PLACE;

  selectContact(place: PLACE) {
    this.selectedContact = place;

  }
}
