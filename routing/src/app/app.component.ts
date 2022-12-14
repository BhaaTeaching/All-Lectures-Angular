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
  constructor(private router : Router, public userService : UserService) {
  }

  onClick() {
    if (this.goToHome) {
       this.router.navigate(["/"])
    } else {
      this.router.navigate(["/about"])
    }
    this.goToHome = !this.goToHome;
  }

  // getUser(id: number) {
  //   this.router.navigate(["user", id])
  // }
}
