
import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.style.css'
    ],
    template: `
    <main class="mainCSS">
      <router-outlet></router-outlet>
    </main>

  `
})
export class App {
    angularclassLogo = 'assets/img/not.png';
    name = 'Zeamo';

    constructor() {

    }

    ngOnInit() {
    }

}
