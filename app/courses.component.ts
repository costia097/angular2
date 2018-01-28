import {Component} from "angular2/core";
import {CouserService} from "./courser.service";
import {AutoGrowDirective} from "./autoGrowDirective";
import {HideDirective} from "./hidiDiractive";


@Component({
    selector: "courses",
    template: `<h2>Courses</h2>
                        {{title}}
                        <p >PPPPPP</p>
                        <input type="text" autoGrow/>
                        <ul>
                            <li *ngFor="#course of courses">
                                {{course}}
                            </li>
                        </ul>
    <p>WElcome</p>`,
    providers: [CouserService],
    directives:[AutoGrowDirective,HideDirective]
})
export class CoursesComponent {
    title: string = "title";
    courses;

    constructor(courseService: CouserService) {
        this.courses = courseService.getCourses();
    }
}