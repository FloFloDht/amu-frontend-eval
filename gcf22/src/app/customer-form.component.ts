import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

/**
 * Composant permettant la création d'un nouveau client.
 */
@Component({

    selector: 'app-customer-form',

    template: `
        <h2>Créer un client</h2>
        <form (ngSubmit)="onSubmit()" [formGroup]="form">
            <input
                formControlName="fullName"
                type="text" 
                name="fullName" 
                placeholder="Entrer le nom Complet"
            /> <br>
            <input
            formControlName="email"
                type="text" 
                name="email" 
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

    constructor(private router: Router){ }

    form = new FormGroup({
        fullName: new FormControl(),
        email: new FormControl()
    })

    onSubmit(){
        console.log(typeof this.form.value);
        this.onNewCustomer.emit(this.form.value);
        this.router.navigate(['/']);

        this.form.setValue({
            fullName: '',
            email: ''
        });
    }
   
}