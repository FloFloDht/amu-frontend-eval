import { Component } from "@angular/core";
import { CustomersService } from "../api/customers.service";
import { Customers } from "../types/customers";

@Component({
    selector: "app-customer-list-page",
    template:`
        <app-customers-list [customers]="customers"></app-customers-list>
        
    `,
    styles: []
})

export class CustomersListPageComponent{

    customers: Customers = [];

    constructor(private service: CustomersService){ }

    ngOnInit(){
        this.service
          .findAllCustomers()
          .subscribe((customers) => this.customers = customers)
    }
    
}