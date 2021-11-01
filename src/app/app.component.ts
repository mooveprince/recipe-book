import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link: string = "recipe";

  changeLink(link: string) {
    this.link = link;
  }
}
