import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts/accounts.service';
import { CreateLinkedAccount } from '../../domain/create.linked.account';
import { AccountDetail } from '../../domain/accounts.details';

@Component({
    selector: 'create-account',
    templateUrl: './accounts.component.html'
})
export class AccountsComponent {

    accountsModel= new CreateLinkedAccount( 0, 'Current', 0);
    submittedAccountsModel: CreateLinkedAccount;
    isSubmitted: boolean= false;
    accountCreated: AccountDetail;

    constructor(private accountsService: AccountsService) {
    }

    onSubmit() {
        this.submittedAccountsModel = Object.assign({}, this.accountsModel);
        this.accountsService.createAccount(this.submittedAccountsModel).subscribe(p  => {
            this.accountCreated = p;
            this.isSubmitted = true;
        });
}


reset() {
    this.accountsModel = new CreateLinkedAccount( 0, 'Current', 0);
}

createNew() {
    this.accountsModel = new CreateLinkedAccount( 0, 'Current', 0);
    this.isSubmitted = false;
    this.submittedAccountsModel = null;
    this.accountCreated = null;
}
}
