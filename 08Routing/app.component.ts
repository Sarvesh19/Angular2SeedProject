import {Component} from 'angular2/core';
import {MyComonent1Component} from './mycomp1.component';
import {MyComonent2Component} from './mycomp2.component';

import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {CommonService} from "./services/common.service";

@Component({
    selector: 'my-app',
    template:`
           Some Header
           <ul>
            <li> <a [routerLink]="['Component1']"> Component 1 </a> </li>
            <li> <a [routerLink]="['Component2']"> Component 2 </a> </li>
</ul>
           <router-outlet></router-outlet>
            `,
    providers: [CommonService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/component-1', name:'Component1', component: MyComonent1Component, useAsDefault:true},
    {path: '/component-2', name:'Component2', component: MyComonent2Component}
])
export class AppComponent {
  abc = "ravi"
}