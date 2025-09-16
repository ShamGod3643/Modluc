import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavScrollModifier]',
  standalone: false,
})
export class NavScrollModifierDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.renderer.addClass(this.el.nativeElement, 'is-sticky');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'is-sticky');
    }
  }
}
