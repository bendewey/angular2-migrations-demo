declare var angular: angular.IAngularStatic;
import { Directive, ElementRef, Injector, Output, EventEmitter, OnInit, OnChanges, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { Transaction } from './transaction';

@Directive({
    selector: 'deposit-form'
})
export class DepositFormDirective extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
    OnDestroy {
    @Output() onDeposit: EventEmitter<Transaction>;
    constructor(elementRef: ElementRef, injector: Injector) {
        super('depositForm', elementRef, injector);
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