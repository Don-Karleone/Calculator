import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons-area',
  templateUrl: './buttons-area.component.html',
  styleUrls: ['./buttons-area.component.css']
})
export class ButtonsAreaComponent implements OnInit {
  @Output() btnClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(text:any){
    this.btnClick.emit(text);
  }

}
