import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";

@Injectable()
export class RollercoasterService {
    constructor(private _http:Http) {

    }

    getRollercoasters() {
        return this._http.get('http://rollercoaster.cantstop.nl/api/rollercoasters')
            .map(res => res.json());
    }
}