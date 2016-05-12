import { Component }         from 'angular2/core';
import { ChildComponent } from './child.component';

console.log('in parent');

@Component({
  selector: 'my-app',
  template: `
    <section class="parent">
    <h2>In parent temp</h2>
    <input type="text" #n1>
    {{n1.value}}
    <button (click)="test(n1.value)">Test</button> <br><br>
    
    <input type="text" [(ngModel)]="name"><br/>{{name}}
    <child [myName]="n1.value" [myAge]="23" (hobbiesChanged)="hobbies = $event"></child>
    <child myName="{{name}}" (hobbiesChanged)="hobbies = $event"></child>
    <h2>Hobbies</h2>
    <h2>{{hobbies}}</h2>
    </section>
    `,
  directives: [ChildComponent]
})
export class AppComponent {
    hobbies = "ABC"
    name = 'parent input';
    constructor(){
        console.log('in parent constructor');
    }
    test(n1){

        console.log('Printing value')
        console.log(n1)
    }
}




