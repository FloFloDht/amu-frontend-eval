import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InvoicesService } from "../api/invoices.service";
import { Invoice, Invoices } from "../types/invoices";

@Component({

    selector: 'app-invoice-form-page',
    template:`
        <app-invoice-form (onNewInvoices)="addInvoices($event)"></app-invoice-form>
    `,
    styles:[]
})

export class InvoicesFormPageComponent{

    invoice: Invoice;

    constructor(private service: InvoicesService, private router: Router){ }

    addInvoices(invoice: Invoice){
        console.log(invoice);
        this.service
            .create(invoice.amount, invoice.status, invoice.idCustomer)
            .subscribe(response => {
                this.router.navigate(['/', invoice.idCustomer]);
            });
    }

}