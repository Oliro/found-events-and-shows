import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';

import { GoogleApiService } from '../services/googleApi.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ticketMasterApiService } from '../services/ticketMasterApi.service';
import { Attraction } from '../models/ticketMaster';

@Component({
  selector: 'app-view-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-result.component.html',
  styleUrl: './view-result.component.sass'
})
export class ViewResultComponent implements OnChanges {

  @Input() query!: string;

  public items!: Observable<Attraction[]>;

  private ticketMasterApiService = inject(ticketMasterApiService);

  ngOnChanges(): void {

    if(this.query  !== undefined) this.items = this.ticketMasterApiService.search(this.query);
      
  }

}
