import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  randomNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber() {
    this.randomNumber = Math.floor(Math.random() * 10);
  }

}
