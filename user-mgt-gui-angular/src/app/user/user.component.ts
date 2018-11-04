import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //Decorator
  @Input() userFirstName : String;
  @Input() userLastName : String;
  @Input() userRole : String;

  constructor() { }

  ngOnInit() {
  }

  getLastName() {
    return this.userLastName;
  }

  isUserAnAdmin() {
    return this.userRole === 'Admin';
  }

  getColorForAdmin() {
    if(this.userRole === 'Admin') {
      return 'red';
    } else if (this.userRole === 'Reader') {
      return 'green';
    }
  }
}
