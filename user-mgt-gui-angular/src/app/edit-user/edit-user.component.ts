import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  defaultRole = 'Reader';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const firstName = form.value['firstName'];
    const lastName = form.value['lastName'];
    const role = form.value['role'];

    this.userService.addUser(firstName, lastName, role);
    this.router.navigate(['/users']);
  }
}
