import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomersService } from "../api/customers.service";
import { Customer } from "../types/customers";

@Component({

    selector:'app-customer-details-page',
    template:`
        <ng-container *ngIf="customer">
        <h2>Fiche de {{ customer.fullName }}</h2>
        <h3>({{customer.mail}})</h3>
        
        </ng-container>

        <p *ngIf="!customer">En cours de chargement</p>
        <table>
            <tr>
                <td>liste des factures</td>
            </tr>
        </table>
        <button routerLink="/">Retour aux clients</button>
        <br>
        <br>
        <button routerLink="/id/invoices/add">Créer une facture</button>
    `,
    styles:[]
})

export class CustomerDetailsPageComponent{

    customer?: Customer;

    constructor(private route: ActivatedRoute, private service: CustomersService){ }

    ngOnInit(){
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        console.log("Affichons " + id);

        this.service
            .findOne(id)
            .subscribe(customers => this.customer = customers[0]);
    }

}