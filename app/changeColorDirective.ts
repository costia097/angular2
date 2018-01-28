import {Directive, ElementRef} from "angular2/core";

@Directive({
    selector: '[change]'
})
export class ChangeColorDirective {

    constructor(el_:ElementRef) {
        el_.nativeElement.style.color = "red";
    }
}