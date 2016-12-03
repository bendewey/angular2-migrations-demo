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
var core_1 = require('@angular/core');
var general_ledger_service_1 = require('./general-ledger.service');
var AppComponent = (function () {
    function AppComponent(generalLedger) {
        generalLedger.loadAccounts();
        if (generalLedger.accounts.length === 0) {
            generalLedger.add('acct1', 'Checking Account');
            generalLedger.add('acct2', 'Savings Account');
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n    <div class=\"header\">\n      <div class=\"navbar navbar-inverse\" role=\"navigation\">\n        <div class=\"container\">\n          <div class=\"navbar-header\">\n\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#js-navbar-collapse\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n\n            <a class=\"navbar-brand\" routerLink=\"/accounts\">Accounts</a>\n          </div>\n\n          <div class=\"collapse navbar-collapse\" id=\"js-navbar-collapse\">\n\n            <ul class=\"nav navbar-nav\">\n              <li routerLinkActive=\"active\"><a routerLink=\"/accounts\">Accounts</a></li>\n\t\t\t  <li routerLinkActive=\"active\"><a routerLink=\"/about\">About</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n      <div class=\"container\">\n        <p>https://github.com/bendewey/jstesting-demo</p>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [general_ledger_service_1.GeneralLedgerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map