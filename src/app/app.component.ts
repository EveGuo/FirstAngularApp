import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // <app-customers></app-customers>
  template: `
    <router-outlet></router-outlet>
  `
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'AugApp';
  // title = 'Hello World';
  constructor() { }
  ngOnInit() {

  }
}


// to write inline html, use `<h1>hello</h1>
//                          <p>I am Eve</p>`
