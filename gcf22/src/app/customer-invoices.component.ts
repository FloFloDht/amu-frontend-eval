import { Component, Input } from "@angular/core";
import { Invoices } from "./types/invoices";

@Component({

    selector: 'app-customer-invoices',

    template: `
    <div class="container mt-3">
        <h4>Facture(s)</h4>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Montant</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let invoice of invoices">
                    <td>{{invoice.amount}} €</td>
                    <td>{{invoice.status}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `

})

export class CustomerInvoicesComponent{

    @Input()

    invoices: Invoices = [];

    constructor() { }
  
}