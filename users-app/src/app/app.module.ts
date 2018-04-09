import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ClassComponent } from './user/class/class.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ClassComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
