import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {
  isAuth = false;
  users: any[];
  userSubscription: Subscription;

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
    this.userService.emitUserSubject();
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
