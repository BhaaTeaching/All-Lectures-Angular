import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing-lecture';
  name = 'Learn how to test your app';
  isOn = false;

  constructor(private userService: UserService) { }

  clicked() { this.isOn = !this.isOn; }
  get message () { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
