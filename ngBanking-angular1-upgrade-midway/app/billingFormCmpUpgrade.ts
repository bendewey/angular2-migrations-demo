declare var angular: angular.IAngularStatic;
import { Directive, ElementRef, Injector, Output, EventEmitter, OnInit, OnChanges, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { Transaction } from './transaction';

@Directive({
    selector: 'billpay-form'
})
export class BillPayFormDirective extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
    OnDestroy {
    @Output() onPaybill: EventEmitter<Transaction>;
    constructor(elementRef: ElementRef, injector: Injector) {
        super('billpayForm', elementRef, injector);
    }

    ngOnInit() {
        super.ngOnInit();
    }
    ngOnChanges(changes: SimpleChanges) {
        super.ngOnChanges(changes);
    }
    ngDoCheck() {
        super.ngDoCheck();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}