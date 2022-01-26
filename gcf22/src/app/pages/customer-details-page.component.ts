import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomersService } from "../api/customers.service";
import { InvoicesService } from "../api/invoices.service";
import { Customer } from "../types/customers";
import { Invoice, Invoices } from "../types/invoices";

@Component({

    selector:'app-customer-details-page',
    template:`
        <ng-container *ngIf="customer">
        <h2>Fiche de {{ customer.fullName }}</h2>
        <h3>({{customer.mail}})</h3>
        
        </ng-container>

        <p *ngIf="!customer">En cours de chargement</p>
        <app-customer-invoices [invoices]="invoices"></app-customer-invoices>
        
        <button routerLink="/">Retour aux clients</button>
        <br>
        <br>
        <button routerLink="/{{customer?.id}}/invoices/add">Créer une facture</button>
    `,
    styles:[]
})

export class CustomerDetailsPageComponent{

    customer?: Customer;
    invoices: Invoices = [];

    constructor(private route: ActivatedRoute, 
        private customersService: CustomersService,
        private invoicesService: InvoicesService){ }

    ngOnInit(){
        
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.customersService
            .findOne(id)
            .subscribe(customers => {
                console.log(customers[0])
                this.customer = customers[0]});

        this.invoicesService
            .findAllByCustomerId(id)
            .subscribe(invoices => {
                console.log(invoices[0])
                this.invoices = invoices
            });
    }

}