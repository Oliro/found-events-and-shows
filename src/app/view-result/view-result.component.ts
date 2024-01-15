import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-result',
  standalone: true,
  imports: [],
  templateUrl: './view-result.component.html',
  styleUrl: './view-result.component.sass'
})
export class ViewResultComponent implements OnInit {

  @Input() query!: string;

  constructor() {

  }

  ngOnInit(): void {

  }

}
