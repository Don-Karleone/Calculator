import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  screen: string = '';
  operationSymbol?: string;
  value1?: number | null;

  clearScreen() {
    this.screen = '';
  }
  displayOnScreen(result: string) {
    this.screen = result;
  }
  setOperationSymbol(symbol: string) {
    this.operationSymbol = symbol;
  }
  clearOperationSymbol() {
    this.operationSymbol = '';
  }
  setValue1(value: number | null) {
    this.value1 = value;
  }

  changeResult(text: any) {
    switch (text) {
      default: {
        if (this.operationSymbol == "=") {
          this.clearScreen();
          this.clearOperationSymbol();
        }
        this.screen += text;
      }
        break;

      case "CE": {
        this.clearScreen();
        this.clearOperationSymbol();
        this.value1 = null;
      };
        break;

      case "+": {
        if (this.value1 == null) this.setValue1(+this.screen);
        this.clearScreen();
        this.setOperationSymbol("+");
      };
        break;

      case "-": {
        if (this.value1 == null) this.setValue1(+this.screen);
        this.clearScreen();
        this.setOperationSymbol("-");
      }; break;

      case "/": {
        if (this.value1 == null) this.setValue1(+this.screen);
        this.clearScreen();
        this.setOperationSymbol("/");
      }; break;

      case "*": {
        if (this.value1 == null) this.setValue1(+this.screen);
        this.clearScreen();
        this.setOperationSymbol("*");
      }; break;

      case "=": {
        if (this.operationSymbol == "+" && this.value1 != null) this.displayOnScreen(String(this.value1 + Number(this.screen)))
        if (this.operationSymbol == "/" && this.value1 != null) this.displayOnScreen(String(this.value1 / Number(this.screen)))
        if (this.operationSymbol == "*" && this.value1 != null) this.displayOnScreen(String(this.value1 * Number(this.screen)))
        if (this.operationSymbol == "-" && this.value1 != null) this.displayOnScreen(String(this.value1 - Number(this.screen)))
        this.setValue1(null);
        this.setOperationSymbol("=");
      };
        break;
    }
  }

}
