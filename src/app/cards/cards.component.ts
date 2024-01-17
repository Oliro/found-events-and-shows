import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.sass',
})
export class CardsComponent implements OnInit{

  public randomBgColor:any;

  bgColors: any = {
    1: 'Red',
    2: 'Pink',
    3: 'Purple',
    4: 'Deep-Purple',
    5: 'Indigo',
    6: 'Blue',
    7: 'Light-Blue',
    8: 'Cyan',
    9: 'Teal',
    10: 'Green',
    11: 'Light-Green',
    12: 'Lime',
    13: 'Yellow',
    14: 'Amber',
    15: 'Orange',
    16: 'Deep-Orange',
    17: 'Brown',
    18: 'Grey',
    19: 'Blue-Grey',
  };

  @Input() item: any;

  @ViewChild('materialCard') materialCard!: ElementRef;
  
  ngOnInit(): void {
    this.getBgColor();
  }

  details(){
      const card = this.materialCard.nativeElement;
      const icon = card.querySelector('.mc-btn-action i');
      icon.classList.add('fa-spin-fast');
  
      if (card.classList.contains('mc-active')) {
        card.classList.remove('mc-active');
  
        setTimeout(() => {
          icon.classList.remove('fa-arrow-left', 'fa-spin-fast');
          icon.classList.add('fa-bars');
        }, 800);
      } else {
        card.classList.add('mc-active');
  
        setTimeout(() => {
          icon.classList.remove('fa-bars', 'fa-spin-fast');
          icon.classList.add('fa-arrow-left');
        }, 800);
      }
  }

  getBgColor(): any {
    const valoresCores = Object.values(this.bgColors);
    return this.randomBgColor = valoresCores[Math.floor(Math.random() * valoresCores.length)];
  }

  reduceValue(name: string) {
    return name.split(' ').slice(0, 2).join(' ');
  }

}
