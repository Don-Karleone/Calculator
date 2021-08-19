import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result?: string;
  @Input() operationSymbol?: string;
  @Input() value?: string;

  constructor() { }

  ngOnInit(): void {
    this.result = 'hello!';
  }

}
