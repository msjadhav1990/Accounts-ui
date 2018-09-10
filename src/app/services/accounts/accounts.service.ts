import {Injectable} from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import { CreateLinkedAccount } from '../../domain/create.linked.account';
import { AccountDetail } from '../../domain/accounts.details';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AccountDetailsWithTransactions } from '../../domain/accounts.details.withtransactions';

@Injectable()
export class AccountsService {
    private heroesUrl = 'http://localhost:9001/app/accounts';  // URL to web api 

    constructor(private http: Http) { }
    // create Linked Account
     createAccount(createLinkedAccount: CreateLinkedAccount): Observable<AccountDetail> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST'
        });

        return this.http.post(this.heroesUrl, JSON.stringify(createLinkedAccount), { headers: headers })
            .map((response: any) => response.json())
            .catch(this.handleError);
    }


    getCustomerDetails(id: number): Observable<AccountDetailsWithTransactions> {
        return this.http.get(this.heroesUrl + '/' + id)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : (error.status ? `${error.status} - ${error.statusText}` : 'Server error');
        console.error('An error occurred', errMsg);
        return Observable.throw(errMsg);
    }
}
