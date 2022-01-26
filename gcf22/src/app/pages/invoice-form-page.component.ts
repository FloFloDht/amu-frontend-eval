import { Component } from "@angular/core";
import { InvoicesService } from "../api/invoices.service";
import { Invoices } from "../types/invoices";

@Component({

    selector: 'app-invoice-form-page',
    template:`
        <app-invoice-form (onNewInvoice)="addInvoices($event)"></app-invoice-form>
    `,
    styles:[]
})

export class InvoicesFormPageComponent{

    invoices: Invoices = [];

    constructor(private service: InvoicesService){ }

    addInvoices(invoice: any){
        this.service
            .create(invoice.amount, invoice.state, invoice.idCustomer)
            .subscribe((invoices) => this.invoices.push(invoices[0]));
    }

}