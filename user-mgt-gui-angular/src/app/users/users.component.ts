import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  #Decorator
  @Input() userName : String;
  @Input() userLastName : String;

  constructor() { }

  ngOnInit() {
  }

  getLastName() {
    return this.userLastName;
  }
}
