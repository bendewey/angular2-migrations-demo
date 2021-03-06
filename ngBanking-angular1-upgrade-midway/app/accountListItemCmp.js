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
var static_1 = require('@angular/upgrade/static');
var account_1 = require('./account');
var AccountListItemComponent = (function () {
    function AccountListItemComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', account_1.Account)
    ], AccountListItemComponent.prototype, "account", void 0);
    AccountListItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'account-list-item',
            templateUrl: '/app/accountListItem.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AccountListItemComponent);
    return AccountListItemComponent;
}());
exports.AccountListItemComponent = AccountListItemComponent;
angular.module('ngBanking')
    .directive('accountListItem', static_1.downgradeComponent({ component: AccountListItemComponent, inputs: ['account'] }));
//# sourceMappingURL=accountListItemCmp.js.map