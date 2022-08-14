import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCabComponent } from './book-cab/book-cab.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'book', component: BookCabComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
