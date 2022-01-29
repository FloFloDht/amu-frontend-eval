import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Invoice } from "./types/invoices";


/**
 * Composant permettant la création d'une facture.
 */
@Component({

    selector: 'app-invoice-form',
    template: `
        <h2>Création d'une facture</h2>
        <form (ngSubmit)="onSubmit()" [formGroup]="form">
            <input
                formControlName="amount"
                type="number" 
                name="amount" 
                placeholder="Entrer le nom montant"
            /> <br>
            <div class="select">
                <select class="form-select" formControlName="status" name="status">
                <option ngValue="PAID">PAID</option>
                <option ngValue="SENT">SENT</option>
          </select>
            </div><br>
            <button type="submit" name="submit"> Enregistrer la facture</button>
        </form>
    `,
    styles:[]

})

export class InvoicesFromComponent{

    id: number; 
    invoice: Invoice;

    @Output()
    onNewInvoices = new EventEmitter<any>();

    form = new FormGroup({
        amount: new FormControl(),
        status: new FormControl()
    })

    constructor(private route: ActivatedRoute){ }

    ngOnInit(){
        this.id = Number(this.route.snapshot.paramMap.get('id'));
    }

    onSubmit(){

        this.invoice = this.form.value;
        this.invoice.idCustomer = this.id;

        console.log(typeof this.form.value);
        this.onNewInvoices.emit(this.invoice);

        this.form.setValue({
            amount: '',
            status: ''
        });
    }

}