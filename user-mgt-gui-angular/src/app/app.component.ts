import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

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

  users = [
    {
      firstName : 'Tom1',
      lastName : 'Cruise1',
      role : 'Reader'
    },
    {
      firstName : 'Tom2',
      lastName : 'Cruise2',
      role : 'Reader'
    },
    {
      firstName : 'Tom3',
      lastName : 'Cruise3',
      role : 'Admin'
    },
    {
      firstName : 'Tom4',
      lastName : 'Cruise4',
      role : 'Reader'
    },
    {
      firstName : 'Tom5',
      lastName : 'Cruise5',
      role : 'Admin'
    },
    {
      firstName : 'Tom6',
      lastName : 'Cruise6',
      role : 'Reader'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }

  onCreateUser() {
    console.log('User creation !');
  }
}
