import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {id: 1, name: "alex", age: 25},
    {id: 2, name: "Anna", age: 18},
    {id: 3, name: "Bob", age: 35},
  ]

  constructor() { }

  getUserById = (id : number) => {
    let filter = this.users.filter(x => x.id === id);
    console.log(filter, id)
    return filter.pop();
  }
}
