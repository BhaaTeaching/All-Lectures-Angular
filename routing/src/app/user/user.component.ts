import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : {
    id: number;
    name: string;
    age: number;
  } | undefined;
  isLegal: boolean = true;

  constructor(private userService : UserService, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe((param : Params) => {
      const id = Number(param['id']);
      this.user = this.userService.getUserById(id)
      console.log("user = ", this.user)
    })
    this.activatedRoute.queryParams.subscribe((queryParam : Params) => {
      this.isLegal = queryParam['isLegal'] === "true";
    });
  }

  ngOnInit(): void {

  }

}


