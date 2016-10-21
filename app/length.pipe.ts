import {Pipe} from 'angular2/core';

@Pipe({
    name: 'LengthPipe'
})

export class LengthPipe {
    transform(value, args?) {
        let [minLength] = args;
        return value.filter(rollercoaster => {
            return rollercoaster.rollercoasterRiderMinHeight >= +minLength;
        });
    }
}