import { Component } from "@angular/core";

@Component({

    selector: 'app-invoice-form',
    template: `
        <h2>Création d'une facture</h2>
        <form>
            <input type="number" name="invoice-amount" placeholder="Montant de la facture"/> <br>
            <input type="text" name="invoice-state" placeholder="Etat de la facture"/> <br>
            <button>Envoyer</button><br>
            <button routerLink="/">Retour</button>
        </form>
    `,
    styles:[]

})

export class InvoicesFromComponent{

}