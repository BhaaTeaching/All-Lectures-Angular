import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnDestroy{

  names = ['max', 'alex', 'Bob', 'Alice']
  subscription : Subscription;
  constructor(private homeService : HomeService) {
    const observable = new Observable(observer => {
      observer.next(Math.floor(Math.random() * this.names.length));
    })

    this.subscription = observable.subscribe(s => {
      const index = s as number;
      console.log(this.names[index]);
    });

    homeService.subject.next(true);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
