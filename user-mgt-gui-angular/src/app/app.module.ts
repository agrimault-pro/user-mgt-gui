import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';


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
    EditUserComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [    
    MatListModule
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
