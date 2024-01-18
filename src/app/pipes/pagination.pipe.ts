import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(items: any, currentPage:number, contentPerPage: number): any[] {

    if (!items || items.length === 0) {
      return [];
    }

    const startIndex = (currentPage - 1) * contentPerPage;
    return items.slice(startIndex, startIndex + contentPerPage);
    
  }

}
