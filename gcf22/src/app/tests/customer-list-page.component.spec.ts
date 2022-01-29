import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { of } from "rxjs";
import { CustomersService } from "../api/customers.service";
import { CustomerFormComponent } from "../customer-form.component";
import { CustomersListComponent } from "../customers-list.component";
import { CustomersListPageComponent } from "../pages/customers-list-page.component"


// Suites de tests qui validera le fonctionnement du CustomersListPageComponent
describe("CustomersListPageComponent", () => {
    
    let fixture: ComponentFixture<CustomersListPageComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({

            declarations: [
                CustomersListPageComponent,
                CustomersListComponent,
                CustomerFormComponent
            ],

            providers: [CustomersService],

            imports: [
                HttpClientModule,
                ReactiveFormsModule,
                RouterModule.forRoot([])
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CustomersListPageComponent);
    });

    // Nous voulons nous assurer que le composant appellera bien le CustomersService
    // et qu'il afficahera les clients que celui-ci renverra
    it('should call CustomersService and display returned customers', () => {

        const service = TestBed.inject(CustomersService);

        const findAllSpy = spyOn(service, "findAllCustomers");

        findAllSpy.and.returnValue(of([
            {id: 1, fullName: "MOCK_CUSTOMER_NAME_1", email: "MOCK_CUSTOMER_MAIL_1"}
        ]));

        fixture.detectChanges();

        expect(findAllSpy).toHaveBeenCalled();

        expect(fixture.debugElement.queryAll(By.css('td')).length).toBe(1);
    });
    
})