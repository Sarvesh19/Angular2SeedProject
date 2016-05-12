import {Component, Input} from "angular2/core";

/**
 * Created by Puneet on 11-May-16.
 */


@Component({
    selector: 'my-badge',
    template: `

        <button class="btn btn-primary" type="button" (click)="incrementCount()">
            {{text}} <span class="badge">{{count}}</span>
        </button>

        
`
})
export class BadgeComponent {
    @Input('text') text = 'Message'
    @Input('count') count = 0
    incrementCount(){
        this.count ++;
    }
    
}