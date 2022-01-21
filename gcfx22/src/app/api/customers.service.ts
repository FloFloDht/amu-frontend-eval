import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customers } from "../types/customers";

const SUPABASE_URL = 'https://eljkrkenpctuocyweeao.supabase.co/rest/v1/customers';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMTY5ODg4LCJleHAiOjE5NTc3NDU4ODh9.quGm6-7iNzla7COqnN272nD0BAJJeeEghANG_0v1YgQ";

@Injectable()
export class CustomersService{

    constructor(private http: HttpClient){ }

    findAllCustomers() : Observable<Customers>{
        return this.http.get<Customers>(SUPABASE_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    create(fullName: string, mail: string): Observable<Customers>{
        return this.http.post<Customers>(SUPABASE_URL, {
            fullName: fullName,
            mail: mail
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    } 

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