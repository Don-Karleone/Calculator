import { Component, OnInit } from '@angular/core';
import { faPowerOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buttons-area',
  templateUrl: './buttons-area.component.html',
  styleUrls: ['./buttons-area.component.css']
})
export class ButtonsAreaComponent implements OnInit {
  faIcon = faPowerOff;

  constructor() { }

  ngOnInit(): void {
  }

}
