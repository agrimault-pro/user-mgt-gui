import { Component, OnInit, OnDestroy, ViewChild, NgModule } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTableModule, MatPaginatorModule } from '@angular/material';

import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../models/User.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}
];

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit, OnDestroy {
 
  isAuth = false;
  users: User[];
  userSubscription: Subscription;

 // displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'birthDate'];
 // dataSource = new MatTableDataSource<User>(this.users);

 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;




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

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: any[]) => {
        this.users = users;
      }
    );
    this.userService.getUsers();
    console.log('The list of User is loaded: '+ this.users);
    this.userService.emitUserSubject();

    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
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
