import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 user : { name: string; email: string; phone: string; gender:string;} | undefined ;
 isContainsPlus = false;
  genders = ['male', 'female'];
 constructor(private userService: UserService) {}

 onChange = (event : Event) => {
  const target = event.target as HTMLInputElement;
  debugger
  this.isContainsPlus = target.value === '972';
 }

 onSubmit = (formDetails : NgForm) => {
  this.user = {
    name: formDetails.value.name,
    email: formDetails.value.email,
    phone: '+' + (formDetails.value.phoneDetails.phonePrefix?.toString())  + (formDetails.value.phoneDetails.phone?.toString()),
    gender: formDetails.value.gender
  }
  console.log('onSubmit')
  this.userService.addUser(this.user)
  formDetails.reset()
}


generateName = (formDetails : NgForm) => {
    console.log('generateName')
    formDetails.form.patchValue({name : "Suggested Name"})
}
}
