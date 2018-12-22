import { Component, OnInit, OnDestroy, ViewChild, NgModule } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTableModule, MatPaginatorModule } from '@angular/material';

import { UserService } from '../_services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../_models/User.model';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit, OnDestroy {

  isAuth = false;
  users: User[];
  userSubscription: Subscription;

  displayedUserColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'birthDate'];
  userDataSource = new MatTableDataSource<User>(this.users);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) userPaginator: MatPaginator;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  constructor(private userService: UserService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }

/*  getBirthDate() {
    var date = new Date(this.birthDate.toString());
    
    var d = (date.getUTCDay() < 10) ? "0"+date.getUTCDay():date.getUTCDay();  
    var m = (date.getUTCMonth() < 10) ? "0"+date.getUTCMonth():date.getUTCMonth(); 
    var y = date.getUTCFullYear(); 

    return y+"-"+m+"-"+d;
  }*/

  ngOnInit() {
    this.refresh();

    this.userService.getUsers();
    console.log('The list of User is loaded: '+ this.users);
    this.userService.emitUserSubject();

    this.userDataSource.paginator = this.userPaginator;
  }

  refresh() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.userDataSource.data = users;      
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  searchElements(search: string = "") {
    console.log(search);
    this.userDataSource.filter = search.toLowerCase().trim();
  }


  onCreateUser() {
    console.log('User creation !');
  }

  onAllUsersAdmin() {
    console.log('onAllUsersAdmin !');
    this.userService.switchAllUsersToAdmin();
  }

  onAllUsersReader() {
    console.log('onAllUsersReader !');
    this.userService.switchAllUsersToReader()
  }
}
