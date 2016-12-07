"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var BillPayFormDirective = (function (_super) {
    __extends(BillPayFormDirective, _super);
    function BillPayFormDirective(elementRef, injector) {
        _super.call(this, 'billpayForm', elementRef, injector);
    }
    BillPayFormDirective.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    BillPayFormDirective.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    BillPayFormDirective.prototype.ngDoCheck = function () {
        _super.prototype.ngDoCheck.call(this);
    };
    BillPayFormDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BillPayFormDirective.prototype, "onPaybill", void 0);
    BillPayFormDirective = __decorate([
        core_1.Directive({
            selector: 'billpay-form'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Injector])
    ], BillPayFormDirective);
    return BillPayFormDirective;
}(static_1.UpgradeComponent));
exports.BillPayFormDirective = BillPayFormDirective;
//# sourceMappingURL=billingFormCmpUpgrade.js.map