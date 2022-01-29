import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Invoices, Invoice } from "../types/invoices";

// Factorisation des 2 constantes URLs et clé d'API afin de ne pas avoir à les répéter pour chaque appel de l'API
const SUPABASE_URL = 'https://eljkrkenpctuocyweeao.supabase.co/rest/v1/invoices';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMTY5ODg4LCJleHAiOjE5NTc3NDU4ODh9.quGm6-7iNzla7COqnN272nD0BAJJeeEghANG_0v1YgQ";  

@Injectable()
export class InvoicesService {

    constructor(private http: HttpClient){ }

    /**
     * 
     * Récupère l'ensemble des lignes de l'API et fonction de l'id du client et retourne un tableau des factures pour chacun des clients
     */
    findAllByCustomerId(idCustomer:number):Observable<Invoices> {
        return this.http.get<Invoices>(SUPABASE_URL + '?idCustomer=eq.' + idCustomer, {
          headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    } 

    /**
     * 
     * Création d'une nouvelle facture pour un utilisateur donnée auprès de l'API qui nous la retournera ensuite 
     */
    create(amount: number, status: string, idCustomer: number): Observable<Invoice>{
        return this.http.post<Invoice>(SUPABASE_URL, {
            amount: amount,
            status: status,
            idCustomer: idCustomer
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    } 


}