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
                name="amount" 
                placeholder="Entrer le nom montant"
            /> <br>
            <input
            formControlName="state"
                type="text" 
                name="status" 
                placeholder="Entrer l'état de la facture"
            /><br>
            <button type="submit" name="submit"> Enregistrer la facture</button>
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
        // let data=[];
        // data.push(this.form.value[0])
        // data.push(this.form.value[1])
        // data.push() //recup via l'url 

        console.log(typeof this.form.value);
        this.onNewInvoices.emit(this.form.value);

        this.form.setValue({
            amount: '',
            state: ''
        });
    }

}