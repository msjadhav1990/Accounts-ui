"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var accounts_details_component_1 = require("../../components/accountDetails/accounts.details.component");
var accounts_component_1 = require("../../components/accounts/accounts.component");
var not_found_component_1 = require("../../components/notfound/not.found.component");
var appRoutes = [
    { path: 'details', component: accounts_details_component_1.AccountDetailsComponent },
    { path: 'createAccount', component: accounts_component_1.AccountsComponent },
    { path: '', redirectTo: '/details', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    return AppRoutesModule;
}());
AppRoutesModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutesModule);
exports.AppRoutesModule = AppRoutesModule;
//# sourceMappingURL=app.routes.js.map