import {Component, OnDestroy} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  private observerSubscription: Subscription;

  constructor(private homeService : HomeService) {
    // this.observerSubscription = interval(1000)
    //   .subscribe(counter => {
    //   console.log(counter);
    // })


          const customIntervalObservable = new Observable(observer => {
            let counter = 0;
            setInterval(() => {
              observer.next(counter);
              if (counter == 2) {
                observer.complete();
              }
              if (counter > 3) {
                observer.error(new Error("Count is greater than 3 !"))
              }

              counter++;
            }, 1000);
          });

          this.observerSubscription = customIntervalObservable.subscribe(counter => {
            console.log(counter);
          }, error => {
            console.error("Get an error ", error);
          }, () => {
            console.log("completed")
          })

    homeService.subject.subscribe(data => {
      if (data) {
        console.log("User component visited !")
      }
    })

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
    this.observerSubscription.unsubscribe();
  }
}
