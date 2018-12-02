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
  @Input() email : String;
  @Input() phoneNumber : String;
  @Input() birthDate: String;
  //@Input() userRole : String;
  @Input() indexUser : number;
  @Input() id : number;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getLastName() {
    return this.userLastName;
  }

/*  getEmail() {
    return this.email;
  }

  getBirthDate() {
    return this.birthDate;
  }
*/
  isUserAnAdmin() {
    //return this.userRole === 'Admin';
    return false;
  }

  getColorForAdmin() {
/*    if(this.userRole === 'Admin') {
      return 'red';
    } else if (this.userRole === 'Reader') {
      return 'green';
    }*/
  }

    onSwitchUserToAdmin() {
      this.userService.switchUserToAdmin(this.indexUser);
    }

    onSwitchUserToReader() {
      this.userService.switchUserToReader(this.indexUser);
    }
}
