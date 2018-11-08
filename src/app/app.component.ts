import { Component } from '@angular/core';
//import * from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   getApartments =  [ 
  {
    "title":"1 BED APPARTMENT", 
    "rooms":"BED 1",
    "image":"../assets/img/properties/1.jpg",
    "bathRoom":"1 BATHS",
    "area":"100 sqm",
    "price":"500$/Month",
    "parking": "Parking",
    "total":6.25
  },
  {
    "title":"2 BED APPARTMENT", 
    "rooms":"BED 2",
    "image":"../assets/img/properties/2.jpg",
    "bathRoom":"2 BATHS",
    "area":"150 sqm",
    "price":"750$/Month",
    "parking": "Parking",
    "total":7.50
  },
  {
    "title":"3 BED APPARTMENT", 
    "rooms":"BED 3",
    "image":"../assets/img/properties/3.jpg",
    "bathRoom":"3 BATHS",
    "area":"200 sqm",
    "price":"1000$ /Month",
    "parking": "Parking",
    "total":10
  },
  {
    "title":"4 BED APPARTMENT", 
    "rooms":"BED 4",
    "image":"../assets/img/properties/3.jpg",
    "bathRoom":"3 BATHS",
    "area":"200 sqm",
    "price":"1000$ /Month",
    "parking": "Parking",
    "total":12
  },
  {
    "title":"5 BED APPARTMENT", 
    "rooms":"BED 5",
    "image":"../assets/img/properties/3.jpg",
    "bathRoom":"3 BATHS",
    "area":"200 sqm",
    "price":"1000$ /Month",
    "parking": "Parking",
    "total":15
  },
  {
    "title":"6 BED APPARTMENT", 
    "rooms":"BED 6",
    "image":"../assets/img/properties/3.jpg",
    "bathRoom":"3 BATHS",
    "area":"200 sqm",
    "price":"1000$ /Month",
    "parking": "Parking",
    "total":17
  }
    ] 
}
