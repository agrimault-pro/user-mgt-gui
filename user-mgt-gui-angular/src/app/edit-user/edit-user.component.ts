import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const firstName = form.value['firstName'];
    const lastName = form.value['lastName'];

    this.userService.addUser(firstName, lastName);
    this.router.navigate(['/users']);
  }
}
