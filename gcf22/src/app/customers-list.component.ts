import { Component, Input } from "@angular/core";
import { Customers } from "./types/customers";

@Component({

    selector: 'app-customers-list',

    template: `
    <button routerLink="/create">Créer un client</button>
    <div id="table">
      <table>
        <tr *ngFor="let item of customers">
          <td><a routerLink="/{{item.id}}">{{item.fullName}}</a> | {{item.mail}}</td>
        </tr>
      </table>
    </div>
  
    `,
    styles: []
})

export class CustomersListComponent{
    @Input()
    customers: Customers = []
}