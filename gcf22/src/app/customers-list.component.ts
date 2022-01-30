import { Component, Input } from "@angular/core";
import { Customers } from "./types/customers";

@Component({

    selector: 'app-customers-list',

    template: `
    <div class="container mt-3">
    <div class="card bg-light text-dark">
      <table>
        <tr *ngFor="let item of customers">
        <div class="card-body">
          <td><a routerLink="/{{item.id}}">{{item.fullName}}</a> | {{item.email}}</td>
        </div>
        </tr>
      </table>
    </div>

    <br>
    <button type="button" class="btn btn-secondary" routerLink="/create">Créer un client</button>
    </div>

    `,
    styles: []
})

export class CustomersListComponent{
    @Input()
    customers: Customers = []
}