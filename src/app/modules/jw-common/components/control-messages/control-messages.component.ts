/**
 * Created by cl-macmini-10 on 19/09/16.
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'control-messages',
    template: `<div *ngIf="errorMessage" class="error">{{errorMessage}}</div>`,
    styles: [`
        .error{
            color:red;
            font-size: 14px;
            font-family: 'Metropolis' !important;
        }
    `]
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlMessages {
    // errorMessage: string;
    @Input() control!: FormControl;
    decimal!: number;

    constructor() {

    }

    config(key: any, validatorValue: any) {
        const _config: any = {
            'required': 'This field is required.',
            'invalidCreditCard': 'Please enter a valid credit card number',
            'invalidEmailAddress': 'Please enter a valid email address',
            'invalidPassword': 'Please enter a valid password. Password must be at least 6 characters long, and contain a number',
            'invalidPhoneNumber': 'Please enter a valid phone number',
            'invalidZipCode': 'Please enter a valid ZIP Code',
            'invalidVIN': 'Please enter a valid VIN',
            'invalidWeight': 'Weight value should not exceed 250',
            'invalidCapacity': 'Vehicle Capcity should not exceed 5500',
            'invalidOTP': 'Please enter a valid OTP',
            'pattern': 'Please enter a valid input',
            'minlength': 'This field must be atleast 3 characters long.',
            'maxlength': 'This field must be atleast 30 characters long.',
            'validateEmail': `Enter a valid email`,

        };
        return _config[key];
    }

    get errorMessage() {
        if (this.control.dirty && this.control.touched) {
            for (const propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName)) {
                    return this.control.errors.label || this.config(propertyName, this.control.errors);
                }
            }
        }
        return '';
    }
}
