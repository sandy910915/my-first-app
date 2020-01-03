import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent implements OnInit {

  constructor() { }

  showButton: boolean = false;

  ngOnInit() {
  }

  onButtonClick() {
    this.showButton = !this.showButton;
  }

}
