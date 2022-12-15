import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  goToHome : boolean = false;
  moveTo : string = 'About';
  constructor(private router : Router, public userService : UserService) {
  }

  onClick() {
    if (this.goToHome) {
       this.router.navigate(["/"])
      this.moveTo = 'About';
    } else {
      this.router.navigate(["/about"])
      this.moveTo = 'Home';
    }
    this.goToHome = !this.goToHome;
  }

  getUser(id: number) {
    let queryParam = {queryParams: {isLegal : true}};
    if (id === 3) {
     queryParam = {queryParams: {isLegal : false}};
    }
    this.router.navigate(["/user", id] ,queryParam);
  }
}
