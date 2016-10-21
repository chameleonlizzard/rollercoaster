import {Component} from "angular2/core";
import {RollercoasterListComponent} from "./rollercoasters/rollercoaster-list.component";
@Component({
    selector: 'app',
    template: `    
        <rollercoaster-list>
            Reading list...
        </rollercoaster-list>
    `,
    directives: [RollercoasterListComponent],
})

export class AppComponent {

}