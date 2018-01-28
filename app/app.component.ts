import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";


@Component({
    selector: 'my-app',
    template: '<h1>Hello nigga!!!!!dasdasd</h1>' +
    '<courses></courses>  ' +
    '<auth></auth>',

    directives: [CoursesComponent,AuthorsComponent],
})
export class AppComponent {

}