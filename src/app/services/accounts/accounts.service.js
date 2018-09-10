"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var AccountsService = (function () {
    function AccountsService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:9001/app/accounts'; // URL to web api 
    }
    // create Linked Account
    AccountsService.prototype.createAccount = function (createLinkedAccount) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST'
        });
        return this.http.post(this.heroesUrl, JSON.stringify(createLinkedAccount), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AccountsService.prototype.getCustomerDetails = function (id) {
        return this.http.get(this.heroesUrl + '/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AccountsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message : (error.status ? error.status + " - " + error.statusText : 'Server error');
        console.error('An error occurred', errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return AccountsService;
}());
AccountsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map