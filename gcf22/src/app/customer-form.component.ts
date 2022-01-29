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
            <div class="mb-3 mt-3">
                <label for="fullName">Email:</label>
                <input type="text" class="form-control" formControlName="fullName" name="fullName" placeholder="Entrer le nom complet">
            </div>
            <div class="mb-3 mt-3">
                <label for="email">Email:</label>
                <input type="email" class="form-control" formControlName="email" name="email" placeholder="Entrer un mail">
            </div>
            <button class="btn btn-secondary btn-sm" type="submit" name="submit"> Enregistrer </button>
        </form>
        <br>
        <button class="btn btn-dark btn-sm" routerLink="/">Retour</button>
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