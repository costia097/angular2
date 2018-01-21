import {Component} from "angular2/core";
import {AuthorsService} from "./authors.service";

@Component({
    selector:"auth",
    template: `<h2>{{titile}}</h2>
        <ul>
            <li *ngFor="#author of authors">{{author}}</li>
        </ul>
    `,
    providers: [AuthorsService]

})
export class AuthorsComponent {
    titile: string = "Authors";
    authors ;

    constructor(authorsService:AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}