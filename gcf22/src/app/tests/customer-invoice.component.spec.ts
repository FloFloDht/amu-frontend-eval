import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CustomerInvoicesComponent } from "../customer-invoices.component";

// Suites de tests permettant de s'assurer que le CustomerInvoicesComponent fonctionne correctement
// et fait ce que nous attendons de lui.  
describe('InvoiceListCustomer', () => {

    let fixture: ComponentFixture<CustomerInvoicesComponent>;

    let component: CustomerInvoicesComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({

            declarations: [CustomerInvoicesComponent],

            imports: [RouterModule.forRoot([])]
        }).compileComponents();

        fixture = TestBed.createComponent(CustomerInvoicesComponent);

        component = fixture.componentInstance;
    });

    // Le component devrait afficher dans l'interface HTML autant de factures 
    // qu'on lui donne dans sa propriété invoices. 
    it('shoul be display print each invoices given in input on the screen', () => {

        let MOCK_INVOICES = [
            {id: 1, amount: 1000, status: "MOCK_INVOICE_STATUS_1", idCustomer: 1},
            {id: 3, amount: 1000, status: "MOCK_INVOICE_STATUS_2", idCustomer: 1},
        ]

        component.invoices = MOCK_INVOICES;

        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('td')).length).toBe(2);
    });
    
})