

import {Component} from "angular2/core";
import {CommonService} from "./services/common.service"
@Component({
    selector: 'my-comp1',
    template: `
        Component 1 {{abc}}
        <input type="text" [(ngModel)] = '_commonService.message' >
        <button (click) = "onLog('Ravi')">Fire OnLog</button>
    `
    // providers: [CommonService]
})

export class MyComonent1Component{
    constructor(private _commonService: CommonService){

    }
    onLog(message: string){
        this._commonService.log(message);
    }

}