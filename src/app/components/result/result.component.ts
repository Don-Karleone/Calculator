import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

  clearResult() {
    this.text = '';
    console.log("result.component.clearResult()");
  }
  addValues() {
    ;
  }
  substractValues() {
    ;
  }

}
