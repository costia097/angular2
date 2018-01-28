import {Component} from "angular2/core";
import {AuthorsService} from "./authors.service";
import {HideDirective} from './hidiDiractive';
import {ChangeColorDirective} from "./changeColorDirective";

@Component({
    selector: "auth",
    template: `<h2>{{titile}}</h2>
    <ul>
        <li *ngFor="#author of authors">{{author}}</li>
    </ul>
        <p change>Color</p>
    `,
    directives: [HideDirective,ChangeColorDirective],
    providers: [AuthorsService]
})
export class AuthorsComponent {

    titile: string = "Authors";
    authors;

    constructor(authorsService: AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}