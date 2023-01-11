import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  counter = 0;
  constructor() { }

  addUser = () => {
    this.counter++;
  }
}
