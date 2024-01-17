import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public query!: string;

  getEvent(query: string) {
    this.query = query;
  }

  

}
