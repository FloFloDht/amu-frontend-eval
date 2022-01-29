import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomersService } from "../api/customers.service";
import { InvoicesService } from "../api/invoices.service";
import { Customer } from "../types/customers";
import { Invoices } from "../types/invoices";


/**
 * Composant permettant d'afficher le détails de chacun des clients
 */
@Component({

    selector:'app-customer-details-page',
    template:`

        <ng-container *ngIf="customer">
            <h2>Fiche de {{ customer.fullName }}</h2>
            <h3>({{customer.email}})</h3>

            <app-customer-invoices [invoices]="invoices"></app-customer-invoices>
            
            <button class="btn btn-secondary" routerLink="/{{customer?.id}}/invoices/add">Créer une facture</button>
        </ng-container>
        <br>
        <br>
        <button class="btn btn-secondary" routerLink="/">Retour aux clients</button>
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

        /**
         * Utilisation du service CustomersService afin de récupérer et d'afficher les éléments du clients
         */
        this.customersService
            .findOne(id)
            .subscribe(customers => {
                console.log(customers[0])
                this.customer = customers[0]});

        /**
         * Utilisation du service InvoicesService pour récupérer la liste des factures du client
         */
        this.invoicesService
            .findAllByCustomerId(id)
            .subscribe(invoices => {
                console.log(invoices[0])
                this.invoices = invoices
            });
    }

}