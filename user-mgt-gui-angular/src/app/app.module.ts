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
import { UserViewComponent } from './user-view/user-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoutes: Routes = [
  { path: 'users', canActivate: [AuthGuard], component: UsersViewComponent },
  { path: 'users/:id', canActivate: [AuthGuard], component: UserViewComponent },
  { path: 'edit-user', canActivate: [AuthGuard], component: EditUserComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: UsersViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: "/not-found" }
]; // path '**' have to be in the last position !

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    UsersViewComponent,
    UserViewComponent,
    FourOhFourComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
