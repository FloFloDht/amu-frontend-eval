import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({

    selector: 'app-invoice-form',
    template: `
        <h2>Création d'une facture</h2>
        <form (ngSubmit)="onSubmit()" [formGroup]="form">
            <input
                formControlName="amount"
                type="number" 
                name="invoice-amount" 
                placeholder="Entrer le nom montant"
            /> <br>
            <input
            formControlName="state"
                type="text" 
                name="invoice-state" 
                placeholder="Entrer l'état de la facture"
            /><br>
            <button type="submit" name="submit"> Enregistrer </button>
        </form>
    `,
    styles:[]

})

export class InvoicesFromComponent{

    @Output()
    onNewInvoices = new EventEmitter<any>();

    form = new FormGroup({
        amount: new FormControl(),
        state: new FormControl()
    })

    onSubmit(){
        console.log(typeof this.form.value);
        this.onNewInvoices.emit(this.form.value);

        this.form.setValue({
            amount: '',
            state: ''
        });
    }

}