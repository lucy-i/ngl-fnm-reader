
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
export class CurrencyComponent {

    // @ViewChild("display")
    // public display: ElementRef;

    // @Input('ngCurrency')
    // currency: string;

    /**
     *
     */
    constructor() {
        // super();
    }

    //@HostListener('keyup', ['$event'])
    keydown(event: KeyboardEvent) {

    }

    keyup(event: KeyboardEvent) {
        const $ele = event.target as HTMLInputElement;

        //  $ele.setSelectionRange(number + 1, number + 1)
        let number = $ele.selectionStart;
        let isDecimalLst = false;

        // When user select text in the document, also abort.
        var selection = window.getSelection().toString();
        if (selection !== '') {
            return;
        }

        // When the arrow keys are pressed, abort.
        if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
            return;
        }
        
        //var $this = $(this);

        // Get the value.
        var input: number | string = $ele.value;

        isDecimalLst = input[number - 1] == '.';

        input = input.replace(/[^0-9\s.]+|\.(?!\d)/g, "");//input.replace(/[\D\s\._\-]+/g, "");

        //  if (input.split('.').length >= 1) 
        //  {

        //  }

        if (input.length == 18)
            return;

        input = input ? parseFloat(input) : 0;

        if (input == 0) {
            if (isDecimalLst)
                $ele.value = '0.0'
            else
                $ele.value = '0';
            return;
        }

        var lastIndex = $ele.value.split('').filter((t, i) => t == ',' && i < number);
        //$this.val(function () {
        $ele.value = (input === 0) ? "" : input.toLocaleString("en-US", {

            minimumFractionDigits: 1,
            maximumFractionDigits: 3
        });
        // });
        var newIndex = $ele.value.split('').filter((t, i) => t == ',' && i < number);

        if ($ele.value[number] == "," || newIndex > lastIndex)
            number = number + 1;
        $ele.setSelectionRange(number, number)
    }


}


// (function ($, undefined) {

//     "use strict";

//     // When ready.
//     $(function () {

//         var $form = $("#form");
//         var $input = $form.find("input");

//         $input.on("keyup", function (event) {


//             // When user select text in the document, also abort.
//             var selection = window.getSelection().toString();
//             if (selection !== '') {
//                 return;
//             }

//             // When the arrow keys are pressed, abort.
//             if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
//                 return;
//             }


//             var $this = $(this);

//             // Get the value.
//             var input = $this.val();

//             var input = input.replace(/[\D\s\._\-]+/g, "");
//             input = input ? parseInt(input, 10) : 0;

//             $this.val(function () {
//                 return (input === 0) ? "" : input.toLocaleString("en-US");
//             });
//         });

//         /**
//          * ==================================
//          * When Form Submitted
//          * ==================================
//          */
//         $form.on("submit", function (event) {

//             var $this = $(this);
//             var arr = $this.serializeArray();

//             for (var i = 0; i < arr.length; i++) {
//                 arr[i].value = arr[i].value.replace(/[($)\s\._\-]+/g, ''); // Sanitize the values.
//             };

//             console.log(arr);

//             event.preventDefault();
//         });

//     });
// })(jQuery);