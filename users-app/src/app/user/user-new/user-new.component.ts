import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})

export class UserNewComponent implements OnInit {
  newUser = new User();
  @Output() createNewEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  create() {
    // call server + clear obj. + save
    this.createNewEvent.emit(this.newUser);
    this.newUser = new User();

  }

}
