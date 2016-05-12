import { Component, Input, EventEmitter } from 'angular2/core';

console.log('in child');

@Component({
  selector: 'child',
  // templateUrl: '05-UserForm/templates/login-form.component.html'


	template: `

<div>MyName is {{name}} and I'm {{myAge}} years </div>
	<input type="text" (keyup)="onHobbiesChanged(hobbies.value) " #hobbies>
`,
 outputs: ['hobbiesChanged']

})

export class ChildComponent {
	// @Input()
	@Input('myName') name = "Ravi";
	@Input('myAge') myAge = "20";


	hobbiesChanged = new EventEmitter<string>();
	onHobbiesChanged(hobbies: string){
		this.hobbiesChanged.emit(hobbies);
	}
}


