import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})
export class SearchComponent {

  public query: string = '';

  @Output() public queryEvent = new EventEmitter<string>();

  search() {
    this.queryEvent.emit(this.query);
  }

}

