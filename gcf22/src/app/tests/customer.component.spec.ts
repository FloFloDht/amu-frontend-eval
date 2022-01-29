// Suites de tests permettant de s'assurer que le CustomerListComponent fonctionne correctement

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CustomersListComponent } from "../customers-list.component"

// et fait ce que nous attendons de lui
describe('CustomerListComponent', () => {
    let fixture : ComponentFixture<CustomersListComponent>;

    let component : CustomersListComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({

            declarations: [CustomersListComponent],

            imports: [RouterModule.forRoot([])]
        }).compileComponents();

        fixture = TestBed.createComponent(CustomersListComponent);

        component = fixture.componentInstance;
    });

    // Le component devrait afficher dans l'interface HTML autant de clients qu'on lui donne dans sa propriété customers 
    it('should display print each customers given in input on the screen', () => {

        // Création d'unn tablea de clients tel qu'il serait si on le récupérait depuis l'API
        let MOCK_CUSTOMERS = [
            {id: 1, fullName: "MOCK_CUSTOMER_NAME_1", email: "MOCK_CUSTOMER_MAIL_1"},
            {id: 2, fullName: "MOCK_CUSTOMER_NAME_2", email: "MOCK_CUSTOMER_MAIL_2"},
        ]

        component.customers = MOCK_CUSTOMERS;

        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('td')).length).toBe(2);

    });

})