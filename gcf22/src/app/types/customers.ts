
//Représentaion d'un client
export type Customer = {

    //une propriété unique id numérique
    id: number,
    //une propriété nom de type String
    fullName: string,
    //une propriété email de type string
    email: string
}

export type Customers = Customer[];
