import { AbstractControl } from '@angular/forms';

export class UserLoginValidators {
    /**
     * Validate username
     * @param control
     */
    static ValidateUsername(control: AbstractControl) {
        const usernames = [
            'kingkong12',
            'rhastafari22',
            'johndoe1994'
        ];
        if (!usernames.includes(control.value)) {
            return {
                validUserName: false
            };
        }
        return null;
    }

    /**
     * Validate if username have symbol
     * @param control
     */
    static ValidateSymbols(control: AbstractControl) {
        const userNameRegex = /^[a-zA-Z0-9]+$/;
        if (!userNameRegex.test(control.value) && !!control.value) {
            return {
                userNameSymbol: true
            };
        }
        return null;
    }
}

