import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-start';
  numbers = [1, 2, 3, 4, 5];
  evenNumbers = [2, 4, 6, 8]
  oddNumbers = [1, 3, 5, 7, 9]
  onlyOdd: boolean = false;
  value: number = 43;  // will print default
}
