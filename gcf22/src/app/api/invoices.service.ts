import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Invoices } from "../types/invoices";

const SUPABASE_URL = 'https://eljkrkenpctuocyweeao.supabase.co/rest/v1/invoices';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMTY5ODg4LCJleHAiOjE5NTc3NDU4ODh9.quGm6-7iNzla7COqnN272nD0BAJJeeEghANG_0v1YgQ";  

@Injectable()
export class InvoicesService {
    constructor(private http: HttpClient){ }

    findAllInvoices() : Observable<Invoices>{
        return this.http.get<Invoices>(SUPABASE_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        } );
    } 
    
    create(state: string, amount: number): Observable<Invoices>{
        return this.http.post<Invoices>(SUPABASE_URL, {
            state: state, 
            amout: amount
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }



    

}