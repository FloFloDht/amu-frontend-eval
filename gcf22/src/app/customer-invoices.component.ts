import { Component, Input } from "@angular/core";
import { Invoices } from "./types/invoices";

@Component({

    selector: 'app-customer-invoices',

    template: `
        <table>
            <tr>
                <th>Montant</th>
                <th>Status</th>
            </tr>
            <tr *ngFor="let invoice of invoices">
                <td>{{invoice.amount}}</td>
                <td>{{invoice.status}}</td>
            </tr>
        </table>
    `

})

export class CustomerInvoicesComponent{

    @Input()

    invoices: Invoices = [];

    constructor() { }
  
}