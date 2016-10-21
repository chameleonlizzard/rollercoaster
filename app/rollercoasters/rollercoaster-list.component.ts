import {Component} from "angular2/core";
import {RollercoasterComponent} from "./rollercoaster.component";
import {RollercoasterService} from "./rollercoaster.service";
import {Rollercoaster} from "./rollercoaster";
import {OnInit} from "angular2/core";
import "rxjs/add/operator/map";
import {LengthPipe} from "../length.pipe";

@Component({
    selector: 'rollercoaster-list',
    templateUrl: ["app/rollercoasters/rollercoaster-list.html"],
    directives: [RollercoasterComponent],
    providers: [RollercoasterService],
    styleUrls: ["src/css/rollercoaster-list.css"],
    pipes: [LengthPipe]
})
export class RollercoasterListComponent implements OnInit {

    public rollercoasters:Rollercoaster[];
    public sliderValue:number;

    constructor(private _rollercoasterService:RollercoasterService) {
        this.sliderValue = 120;
    }

    getRollercoasters() {
        this._rollercoasterService.getRollercoasters().subscribe(
            rollercoasters => this.rollercoasters = rollercoasters,
            error => alert(error),
            () => ''
        );
    }

    ngOnInit():any {
        this.getRollercoasters();
    }
}