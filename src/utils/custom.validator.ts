import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

    public static strongPassword() {
        return (control: FormControl): ValidationErrors => {
          const regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
          if (control.value && !regexp.test(control.value)) {
            return { label: 'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one numeric digit, and one special character.' };
          }
          return null;
        };
    }
}
