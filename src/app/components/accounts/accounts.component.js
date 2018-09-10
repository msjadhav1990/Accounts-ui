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
var accounts_service_1 = require("../../services/accounts/accounts.service");
var create_linked_account_1 = require("../../domain/create.linked.account");
var AccountsComponent = (function () {
    function AccountsComponent(accountsService) {
        this.accountsService = accountsService;
        this.accountsModel = new create_linked_account_1.CreateLinkedAccount(0, 'Current', 0);
        this.isSubmitted = false;
    }
    AccountsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submittedAccountsModel = Object.assign({}, this.accountsModel);
        this.accountsService.createAccount(this.submittedAccountsModel).subscribe(function (p) {
            _this.accountCreated = p;
            _this.isSubmitted = true;
        });
    };
    AccountsComponent.prototype.reset = function () {
        this.accountsModel = new create_linked_account_1.CreateLinkedAccount(0, 'Current', 0);
    };
    AccountsComponent.prototype.createNew = function () {
        this.accountsModel = new create_linked_account_1.CreateLinkedAccount(0, 'Current', 0);
        this.isSubmitted = false;
        this.submittedAccountsModel = null;
        this.accountCreated = null;
    };
    return AccountsComponent;
}());
AccountsComponent = __decorate([
    core_1.Component({
        selector: 'create-account',
        templateUrl: './accounts.component.html'
    }),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService])
], AccountsComponent);
exports.AccountsComponent = AccountsComponent;
//# sourceMappingURL=accounts.component.js.map