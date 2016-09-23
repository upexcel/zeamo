
import {Component} from '@angular/core';

@Component({
    selector:'home',
    templateUrl:'./home.html',
    styleUrls:['./home.css']
    })

export class HomePage{
    title:any;
    constructor(){
        this.title="HomePage"
    }
}