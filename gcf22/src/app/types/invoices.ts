
//Représentaiton des factures
export type Invoice = {

    //une propriété unique id numérique
    id: number,
    //une propriété montant de type numérique
    amount: number,
    //une propriété etat de type string
    status: string,
    //une propriété idCustomer afin de relier la facture à un client, de type numérique
    idCustomer: number
}

export type Invoices = Invoice[];