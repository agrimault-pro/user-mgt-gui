import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  firstName: String = 'firstName';
  lastName: String = 'lastName';

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
     const id = this.route.snapshot.params["id"];
     //The + in front of id is a cast to number (id was a string before the cast)
     this.firstName = this.userService.getUserById(+id).firstName;
     this.lastName = this.userService.getUserById(+id).lastName;
  }

}
