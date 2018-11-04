import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
  users: any[];

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

  constructor(private usersService: UsersService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }

  ngOnInit() {
    this.users = this.usersService.users;
  }

  onCreateUser() {
    console.log('User creation !');
  }

  onAllUsersAdmin() {
    console.log('onAllUsersAdmin !');
    this.usersService.switchAllUsersToAdmin();
  }

  onAllUsersReader() {
    console.log('onAllUsersReader !');
    this.usersService.switchAllUsersToReader()
  }
}
