import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  message = "Hello Everyone";
  message2 = "Welcome To TODO WORLD";
  myImage:string = "assets/image/one.png";
}
