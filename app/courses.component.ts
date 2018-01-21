import {Component} from "angular2/core";
import {CouserService} from "./courser.service";
import {AutoGrowDirective} from "./autoGrowDirective";

@Component({
    selector: "courses",
    template: `<h2>Courses</h2>
                        {{title}}
                        <input type="text" autoGrow/>
                        <ul>
                            <li *ngFor="#course of courses">
                                {{course}}
                            </li>
                        </ul>
    `,
    providers: [CouserService],
    directives:[AutoGrowDirective]
})
export class CoursesComponent {
    title: string = "title";
    courses;

    constructor(courseService: CouserService) {
        this.courses = courseService.getCourses();
    }
}