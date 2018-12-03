import { Component, Input, OnInit, ModuleWithComponentFactories } from '@angular/core';
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

  getBirthDate() {
    //var dateInNumber = Date.parse(this.birthDate.toString());
    //var date = new Date(dateInNumber);
    var date = new Date(this.birthDate.toString());
    
    var d = (date.getUTCDay() < 10) ? "0"+date.getUTCDay():date.getUTCDay();  
    var m = (date.getUTCMonth() < 10) ? "0"+date.getUTCMonth():date.getUTCMonth(); 
    var y = date.getUTCFullYear(); 

    //Must be this format: 2015-08-09
    return y+"-"+m+"-"+d;
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
