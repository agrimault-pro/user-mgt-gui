import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AuthComponent } from './auth/auth.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'users', component: UsersViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: UsersViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    UsersViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
