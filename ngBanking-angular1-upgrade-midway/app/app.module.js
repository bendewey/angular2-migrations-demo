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
var platform_browser_1 = require('@angular/platform-browser');
var static_1 = require('@angular/upgrade/static');
var accountsCmp_1 = require('./accountsCmp');
var accountCmp_1 = require('./accountCmp');
var accountListItemCmp_1 = require('./accountListItemCmp');
var depositFormCmpUpgrade_1 = require('./depositFormCmpUpgrade');
var billingFormCmpUpgrade_1 = require('./billingFormCmpUpgrade');
var general_ledger_service_1 = require('./general-ledger.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.ngDoBootstrap = function () { };
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                static_1.UpgradeModule
            ],
            declarations: [
                accountsCmp_1.AccountsComponent,
                accountCmp_1.AccountComponent,
                accountListItemCmp_1.AccountListItemComponent,
                depositFormCmpUpgrade_1.DepositFormDirective,
                billingFormCmpUpgrade_1.BillPayFormDirective
            ],
            providers: [
                general_ledger_service_1.GeneralLedgerService,
                {
                    provide: '$routeParams',
                    useFactory: routeParamsFactory,
                    deps: ['$injector']
                }
            ],
            entryComponents: [
                accountsCmp_1.AccountsComponent,
                accountCmp_1.AccountComponent,
                accountListItemCmp_1.AccountListItemComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function routeParamsFactory(i) {
    return i.get('$routeParams');
}
exports.routeParamsFactory = routeParamsFactory;
//# sourceMappingURL=app.module.js.map