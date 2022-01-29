import { Component } from "@angular/core";
import { CustomersService } from "../api/customers.service";
import { Customers } from "../types/customers";

@Component({

    selector: 'app-customer-form-page',
    template:`
        <app-customer-form (onNewCustomer)="addCustomers($event)"></app-customer-form>
    `,
    styles: []
})

export class CustomerFormPageComponent{

    customers: Customers = [];

    constructor (private service: CustomersService ){ }

    /**
     * Utilisation du service pour ajouter le nouveau client auprès de l'API
     */
    addCustomers(customer: any){
        this.service
          .create(customer.fullName, customer.email)
          .subscribe((customers) => this.customers.push(customers[0]));
    }
}