import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RouterModule, Routes} from "@angular/router";
import { UserComponent } from './user/user.component';

const routing : Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "user/:id", component: UserComponent}
]
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
