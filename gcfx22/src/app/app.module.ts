import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form.component';
import { CustomersListComponent } from './customers-list.component';
import { CustomersService } from './api/customers.service';
import { CustomersListPageComponent } from './pages/customers-list-page.component';
import { CustomerDetailsPageComponent } from './pages/customer-details-page.component';
import { InvoicesFormPageComponent } from './pages/invoice-form-page.component';
import { CustomerFormPageComponent } from './pages/customer-form-page.component';
import { InvoicesFromComponent } from './invoice-form.component';

const routes: Routes = [
  {path: '', component: CustomersListPageComponent},
  {path: 'create', component: CustomerFormPageComponent},
  {path: ':id', component: CustomerDetailsPageComponent},
  {path: ':id/invoices/add', component: InvoicesFormPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerFormComponent,
    CustomersListPageComponent,
    CustomerDetailsPageComponent,
    CustomerFormPageComponent,
    InvoicesFormPageComponent,
    InvoicesFromComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
