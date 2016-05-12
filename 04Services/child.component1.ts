import { Component }         from 'angular2/core';
import {LoggingService} from "./services/logging.service";

@Component({
  selector: 'child1',
  template: `
            Child component 1
            <input type="text" [(ngModel)]="loggingService.message">
            {{loggingService.message}}
            {{loggingService.getMessage()}}
          
            <button (click)="loggingService.log('Comp1')">Log from Come1</button>
            
           <!-- <input type="text" #msg (keyup)="0">
            {{msg.value}}
            <button (click)="doSomething(msg.value)"></button>-->
    `,
  providers: [LoggingService]
})
export class ChildComponent1 {
  loggingService: LoggingService
  constructor(private loggingService : LoggingService){

  }
  doSomething(message){
    this.loggingService.log('Test if this prints on console')
    this.loggingService.log(message)
  }
}




