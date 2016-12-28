import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[testDirective]'
})
export class TestAppDirective {
  myData: string = 'data';
  constructor(public el: ElementRef, public renderer: Renderer) {

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'yello');
    return false;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'green');
  }

  @HostListener('mousemove')
  onMouseMove() {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'red');
  }

  @HostListener('click')
  onMouseClick() {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'grey');
  }
}
