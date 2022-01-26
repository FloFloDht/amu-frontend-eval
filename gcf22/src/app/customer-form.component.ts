import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({

    selector: 'app-customer-form',

    template: `
        <h2>Créer un client</h2>
        <form (ngSubmit)="onSubmit()" [formGroup]="form">
            <input
                formControlName="fullName"
                type="text" 
                name="customer-fullName" 
                placeholder="Entrer le nom Complet"
            /> <br>
            <input
            formControlName="mail"
                type="text" 
                name="customer-mail" 
                placeholder="Entrer un mail"
            /><br>
            <button type="submit" name="submit"> Enregistrer </button>
        </form>
        <br>
        <div id="formButton">
            <button routerLink="/">Retour</button>
        </div>
    `,
    styles: []
})

export class CustomerFormComponent{

    @Output()
    onNewCustomer = new EventEmitter<any>();

    form = new FormGroup({
        fullName: new FormControl(),
        mail: new FormControl()
    })

    onSubmit(){
        console.log(typeof this.form.value);
        this.onNewCustomer.emit(this.form.value);

        this.form.setValue({
            fullName: '',
            mail: ''
        });
    }
   
}