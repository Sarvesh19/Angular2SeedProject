import {Component} from 'angular2/core';
import {BadgeComponent} from "./badge.component";


@Component({
    selector: 'my-app',
    template: `
        <h1>Badge Component</h1>
        <!--<p>Name is {{fName}} </p>
        &lt;!&ndash;<input type="text" [(ngModel)]="n1">&ndash;&gt;
        <input type="text" #n1 (keyup)="0">
        <input type="text" #n2 (keyup)="0">
        {{n1.value}}
        &lt;!&ndash;<input type="text" [(ngModel)]="n2">&ndash;&gt;
        <br>
        <button (click)="add(n1.value, n2.value)"> + </button>
        <button (click)="mul(n1.value, n2.value)"> * </button>
        Result: {{result}}-->
       <!-- <my-badge text="Inbox" count="22"></my-badge>
        <my-badge text="Sent" count="34"></my-badge>
        <my-badge></my-badge>-->
      
        
        <div *ngFor="#abc of list">
            <my-badge [text]="abc.text" [count]="abc.count"></my-badge>
        </div>
        <notepad></notepad>
        <div notepad></div>
    `,
    directives: [BadgeComponent]
})
export class AppComponent {
    list = [
        {text: 'Inbox', count: 34},
        {text: 'Sent', count: 4534},
        {text: 'Message', count: 5}
    ]
    result = 0
    add(n1, n2):void{
        this.result = parseInt(n1) + parseInt(n2)
    }
    mul(n1, n2):void{
        this.result = n1 * n2
    }

}