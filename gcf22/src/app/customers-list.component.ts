import { Component, Input } from "@angular/core";
import { Customers } from "./types/customers";

@Component({

    selector: 'app-customers-list',

    template: `
    <button routerLink="/create">Créer un client</button>
    <ul>
      <li *ngFor="let item of customers">
        <label><a routerLink="/{{item.id}}">{{item.fullName}}</a> | {{item.mail}}</label>
      </li>
    </ul>
  
    `,
    styles: []
})

export class CustomersListComponent{
    @Input()
    customers: Customers = []
}