import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  defaultRole = 'Reader';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('form: '+form.value);
  }
}
