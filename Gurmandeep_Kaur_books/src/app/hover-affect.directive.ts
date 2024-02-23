import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {

  @Input() affect: string | undefined;
  constructor(private el: ElementRef) { }
  @HostListener('mouseover') onMouseEnter(){
    this.applyAffect();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeAffect();
  }

  private applyAffect() {
    switch(this.affect) {
      case 'underline':
        this.el.nativeElement.style.textDecoration = 'underline';
        break;
      case 'bold':
        this.el.nativeElement.style.fontWeight = 'bold';
        break;
      
    }
  }

  private removeAffect() {
    switch(this.affect) {
      case 'underline':
        this.el.nativeElement.style.textDecoration = 'none';
        break;
      case 'bold':
        this.el.nativeElement.style.fontWeight = 'normal';
        break;
      
    }
  }
}


