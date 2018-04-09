import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../user';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() destroyUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Methods

  destroy(user: User) {

  }

}
