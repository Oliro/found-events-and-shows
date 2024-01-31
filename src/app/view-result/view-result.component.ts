import { Component, Input, OnChanges, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CommonModule } from '@angular/common';


import { Attraction } from '../models/ticketMaster';
import { CardsComponent } from '../cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationPipe } from '../pipes/pagination.pipe';
import { ticketMasterApiService } from '../services/ticketMasterApi.service';

@Component({
  selector: 'app-view-result',
  standalone: true,
  imports: [CommonModule, NgbModule, CardsComponent, PaginationPipe],
  templateUrl: './view-result.component.html',
  styleUrl: './view-result.component.sass'
})
export class ViewResultComponent implements OnChanges {

  @Input() query!: string;

  public items!: Observable<Attraction[]>;

  private ticketMasterApiService = inject(ticketMasterApiService);

  public currentPage: number = 1;
  public contentPerPage: number = 8;
  public collectionSize: number = 0;

  showMessage: boolean = true;

  ngOnChanges(): void {

    if (this.query !== undefined) {

      this.showMessage = false;
      this.collectionSize = 0;

      this.items = this.ticketMasterApiService.search(this.query).pipe(
        catchError((err) => {
          throw 'Erro ao consultar API: ' + err;
        })
      )

      this.items
      .pipe(
        catchError((err) => {
          this.showMessage = true;
          throw 'Sem resultados: ' + err;
        }))
      .subscribe(result => {
        
        //console.log(result);
        this.getCollectionSize(result);

      })
    };

  }

  getCollectionSize(result: any) {

    this.collectionSize = result.length;

    this.showMessage = this.collectionSize > 0 ? false : true;

  }

  onPageChange(page: number){
    //console.log(page);
  }

}
