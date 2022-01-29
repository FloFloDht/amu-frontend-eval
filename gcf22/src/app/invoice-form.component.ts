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
            <div class="mb-3 mt-3">
                <label for="amount">Montant:</label>
                <input type="number" class="form-control" formControlName="amount" name="amount" placeholder="Entrer le montant">
            </div>
            <div class="select">
                <label for="status">Status:</label>
                <select class="form-select" formControlName="status" name="status">
                    <option ngValue="PAID">PAID</option>
                    <option ngValue="SENT">SENT</option>
                </select>
            </div><br>
            <button class="btn btn-secondary" type="submit" name="submit"> Enregistrer la facture</button>
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