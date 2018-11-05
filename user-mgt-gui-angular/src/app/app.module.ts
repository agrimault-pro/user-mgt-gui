import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { UsersViewComponent } from './users-view/users-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    UsersViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
