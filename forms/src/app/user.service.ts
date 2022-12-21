import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: { name: string; email: string; phone: string; gender:string;}[] = [];
  constructor() { }

  addUser = (user : { name: string; email: string; phone: string; gender:string;}) => {
    this.users.push(user)
  }

  getUsers = () => {
    return this.users;
  }
}
