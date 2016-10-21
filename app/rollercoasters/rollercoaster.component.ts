import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Rollercoaster} from "./rollercoaster";
import {RouteParams} from "angular2/router";
@Component({
    selector: 'rollercoaster',
    templateUrl: "app/rollercoasters/rollercoaster.html",
    inputs: ["rollercoaster"]
})
export class RollercoasterComponent {
    public rollercoaster: Rollercoaster = null;

    constructor(private _router: Router) {

    }
}