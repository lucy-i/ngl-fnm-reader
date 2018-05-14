
import { Component, OnInit, ElementRef, AfterViewInit, Optional, Host, Self, Inject, SimpleChanges, ViewChild, Input, HostListener } from '@angular/core';
import { NgModel, NG_VALIDATORS, ControlContainer, Validator, AsyncValidator, ValidatorFn, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor, AsyncValidatorFn, CheckboxControlValueAccessor } from '@angular/forms';
import { RESPA_SERVICING_DATA_ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicator } from '../dataExtractor/mismo';
// import { formControlBinding } from '@angular/forms/src/directives/ng_model';


export type ValidationResult = { [validator: string]: string | boolean };
export type AsyncValidatorArray = Array<Validator | AsyncValidatorFn>;
export type ValidatorArray = Array<Validator | ValidatorFn>;


export class ValueAccessorBase<T> implements ControlValueAccessor {
    private innerValue: T;
    private changed = new Array<(val: T) => void>();
    private touched = new Array<() => void>();

    get value() {
        return this.innerValue;
    }

    set value(val: T) {
        if (this.innerValue !== val) {
            this.innerValue = val;
            this.changed.forEach(t => t(val));
        }
    }

    touch() {
        this.touched.forEach(t => t());
    }

    writeValue(obj: T): void {
        this.innerValue = obj;
    }
    registerOnChange(fn: any): void {
        this.changed.push(fn);
    }
    registerOnTouched(fn: any): void {
        this.touched.push(fn);
    }
}

export abstract class ElementBase<T> extends ValueAccessorBase<T>{
    protected abstract model: NgModel;

    /**
     *
     */
    constructor() {
        super();

    }
}


@Component({
    selector: '[ngCurrency]',
    templateUrl: './currency.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CurrencyComponent, multi: true
    }]

})
export class CurrencyComponent extends ElementBase<string> {

    @ViewChild(NgModel)
    protected model: NgModel;

    // @Input('ngCurrency')
    // currency: string;

    /**
     *
     */
    constructor() {
        super();
    }

    @HostListener('keyup', ['$event'])
    keyup($event: KeyboardEvent) {
        //(47<$event.keyCode&&$event.keyCode<58)
        if ((47 < $event.keyCode && $event.keyCode < 58) && [188].indexOf($event.keyCode)==-1) {
            const $ele = $event.target as HTMLInputElement;
            let number = $ele.selectionStart;
            $ele.value = $ele.value + ",";
            $ele.setSelectionRange(number + 1, number + 1)
        }
    }


}
