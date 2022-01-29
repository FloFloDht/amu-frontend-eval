import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customers } from "../types/customers";

// Factorisation des 2 constantes URLs et clé d'API afin de ne pas avoir à les répéter pour chaque appel de l'API
const SUPABASE_URL = 'https://eljkrkenpctuocyweeao.supabase.co/rest/v1/customers';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMTY5ODg4LCJleHAiOjE5NTc3NDU4ODh9.quGm6-7iNzla7COqnN272nD0BAJJeeEghANG_0v1YgQ";
@Injectable()
export class CustomersService{

    constructor(private http: HttpClient){ }
 
    /**
     * Récupère l'ensemble des lignes de l'API et retourne un tableau de clients
     */
    findAllCustomers() : Observable<Customers>{
        return this.http.get<Customers>(SUPABASE_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    /**
     * Création d'un nouveau client auprès de l'API qui nous le retournera ensuite
     */
    create(fullName: string, email: string): Observable<Customers>{
        return this.http.post<Customers>(SUPABASE_URL, {
            fullName: fullName,
            email: email
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    } 

    /**
     * Récupère un client auprès de l'API grâce à son identifiant 
     */
    findOne(id: number): Observable<Customers>{
        return this.http.get<Customers>(SUPABASE_URL + '?id=eq.' + id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }

    
}