import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FourOhFourComponent } from './_four-oh-four/four-oh-four.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthGuard } from './_services/auth-guard.service';
import { UserService } from './_services/user.service';
import { AuthService } from './_services/auth.service';


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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
