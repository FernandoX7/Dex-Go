import { Attribute, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageError]',
})
export class ImageErrorDirective {
  constructor(@Attribute('onErrorSrc') public onErrorSrc: string,
              private renderer: Renderer2,
              private el: ElementRef) {
  }

  @HostListener('error') onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.onErrorSrc);
  }
}
