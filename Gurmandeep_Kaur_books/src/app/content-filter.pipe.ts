import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentFilter',
  standalone: true
})
export class ContentFilterPipe implements PipeTransform {

  transform(contents: Content[], type: string): Content[] {

    if (!type) {
      return contents.filter(content => !content.type);
    } else {
      return contents.filter(content => content.type === type);
    }
    
  }

}