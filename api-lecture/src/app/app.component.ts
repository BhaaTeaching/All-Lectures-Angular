import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-lecture';
  catFact : {fact: string} = {fact : ""}
  constructor(private httpClient: HttpClient) {

  }

  onClick = () => {
    this.getCatsFact();
  }
  private getCatsFact = () => {
    this.httpClient.get('https://catfact.ninja/fact')
      .subscribe(response => {
        console.log("response is: ", response)
        const x = (response as {fact: string; length: number;});
        this.catFact.fact = x?.fact;
      });
  }
}
