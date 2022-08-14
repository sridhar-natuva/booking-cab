import { TripState, TripStore } from './../state/trip.state';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  @Input() userCordinates: [a: number, b: number] = [0, 0];
  @Input() driverCordinates: [a: number, b: number] = [0, 0];

  status$ = this._tripState.status$;

  constructor(private _tripState: TripStore) { }

  ngOnInit(): void {

  }

}
