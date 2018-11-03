import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  user1 = 'Tom1';
  user2 = 'Tom2';
  user3 = 'Tom3';
  user4 = 'Tom4';
  user5 = 'Tom5';

  userLastName1 = 'Cruise1';
  userLastName2 = 'Cruise2';
  userLastName3 = 'Cruise3';
  userLastName4 = 'Cruise4';
  userLastName5 = 'Cruise5';

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
