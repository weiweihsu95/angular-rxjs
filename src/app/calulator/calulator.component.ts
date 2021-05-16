import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calulator',
  templateUrl: './calulator.component.html',
  styleUrls: ['./calulator.component.css']
})
export class CalulatorComponent implements OnInit {

  name1='michael';
  name2='weina';

  constructor() { }

  ngOnInit(): void {
  }
  get score() {
    let letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++){
      sum += letters.charCodeAt(i);

    }
    return sum%100;
  }

}

