import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";

export interface TripState {
    status: 'active' | 'disable'
}

@Injectable()
export class TripStore extends ComponentStore<TripState> {

    constructor() {
        super({ status: 'disable' });
    }

    readonly status$: Observable<'active' | 'disable'> = this.select(state => state.status);
}