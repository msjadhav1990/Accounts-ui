import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts/accounts.service';
import { AccountDetailsWithTransactions } from '../../domain/accounts.details.withtransactions';

@Component({
    selector: 'account-details',
    templateUrl: './accounts.details.component.html'
})
export class AccountDetailsComponent {

    custDetails: AccountDetailsWithTransactions;
    custId: number;
    constructor(private accountsServicec: AccountsService) {}

    getAccountDetails() {
        this.accountsServicec.getCustomerDetails(this.custId).subscribe(p  => this.custDetails = p);
    }
}
