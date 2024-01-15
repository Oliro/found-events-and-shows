import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'getBanda';

  public query!: string;

  getEvent(query: string) {
    this.query = query;
  }

  

}
