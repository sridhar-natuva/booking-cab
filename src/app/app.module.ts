import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { TripComponent } from './trip/trip.component';
import { TripState, TripStore } from './state/trip.state';
import { BookCabComponent } from './book-cab/book-cab.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    RegisterDriverComponent,
    TripComponent,
    BookCabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TripStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
