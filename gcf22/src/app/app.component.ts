import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="app">
    <h1>Gestion de clients et de factures</h1>

    <main>
      <router-outlet></router-outlet>
    </main>

  </div>
    
  `,

  styles: []
})

export class AppComponent { }