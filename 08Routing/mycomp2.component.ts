

import {Component} from "angular2/core";
import {CommonService} from "./services/common.service"
@Component({
    selector: 'my-comp2',
    template: `
        Component 2 {{abc}}
         <input type="text" [(ngModel)] = '_commonService.message' >
        <button (click) = "onLog('Sharma')">Fire OnLog</button>
    `
    // providers: [CommonService]
})

export class MyComonent2Component{
    constructor(private _commonService: CommonService){

    }
    onLog(message: string){
        this._commonService.log(message);
    }

}