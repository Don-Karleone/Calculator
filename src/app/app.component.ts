import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  result: string = '';

  changeResult(text: any) {
    switch (text) {
      case "CE": this.result = '';
        break;
      case "=": this.result = '';
        break;
      default: this.result += text;
        break;
    }
  }

}
