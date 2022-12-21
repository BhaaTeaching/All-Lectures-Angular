import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  users: { name: string; email: string; phone: string; gender:string;}[] = [];

  constructor(private userService : UserService){}
  onClick = () => {
    console.log(this.userService.users)
    this.users = this.userService.getUsers();
    return this.users;
  }
}
