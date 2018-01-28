import {Directive, ElementRef, HostListener, Renderer} from "angular2/core";

@Directive({
    selector: '[hided]'
})
export class HideDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        // Use renderer to render the element with styles
        renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
}