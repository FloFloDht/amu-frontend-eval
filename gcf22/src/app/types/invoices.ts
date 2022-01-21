
//Représentaiton des factures
export type Invoice = {

    //une propriété unique id numérique
    id: number,
    //une propriété montant de type numérique
    amout: number,
    //une propriété etat de type string
    state: string
}

export type Invoices = Invoice[];