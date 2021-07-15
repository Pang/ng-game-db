import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-search-bar></app-search-bar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-game-db';
}
