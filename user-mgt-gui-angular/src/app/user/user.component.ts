import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

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
  @Input() indexUser : number;
  @Input() id : number;

  constructor(private userService: UserService) { }

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

    onSwitchUserToAdmin() {
      this.userService.switchUserToAdmin(this.indexUser);
    }

    onSwitchUserToReader() {
      this.userService.switchUserToReader(this.indexUser);
    }
}
