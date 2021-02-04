

import { EventEmitter, Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';



@Injectable({
    providedIn: 'root'
})
export class CommonService {
    _showLoader: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  
    constructor() { }


    public validateAllFormFields(form: FormGroup) {
        const keys = Object.keys(form.controls);
        keys.forEach((field: any) => {
            const control = form.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            } else if (control instanceof FormArray) {
                (<FormArray>control).controls.forEach((element: any) => {
                    this.validateAllFormFields(element);
                });
            }
        });
    }

    set showLoader(val: boolean) {
        this._showLoader.emit(val);
    }
}