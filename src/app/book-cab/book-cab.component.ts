import { TripStore } from './../state/trip.state';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-cab',
  templateUrl: './book-cab.component.html',
  styleUrls: ['./book-cab.component.css']
})
export class BookCabComponent implements OnInit {

  userCordinates: [a: number, b: number] = [1, 5]; //assume user coordinates
  driverCordinates: [a: number, b: number] = [2, 6] // assume driver coordinates
  maxAllowedDistance = 5 // in kilometers

  status$ = this.tripStore.status$;
  constructor(private tripStore: TripStore) { }

  ngOnInit(): void {
  }

  /**
   * sets state if the distance between user and driver is less than maxAllowedDistance
   * @param userCoordinates 
   * @param driverCoordinates 
   */
  bookCab(userCoordinates: [a: number, b: number], driverCoordinates: [a: number, b: number]) {
    // check the distance between user and driver
    const distance = Math.sqrt(Math.pow((driverCoordinates[0] - userCoordinates[0]), 2) + Math.pow((driverCoordinates[1] - userCoordinates[1]), 2))
    if (distance < this.maxAllowedDistance) {
      this.tripStore.setState({ status: 'active' });
    } else {
      console.log('else condition')
      // this.tripStore.setState({ status: 'disable' });
    }
  }

}
