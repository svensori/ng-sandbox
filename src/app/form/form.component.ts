import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FORM_ERRORS } from './constants/common-errors.enum';
import { UserLoginValidators } from './validators/login.validator';
import { BaseUi } from 'src/shared/models/ui.model';

@Component({
  selector: 'app-ng-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormDemoComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [
        null,
        [
          Validators.required,
          UserLoginValidators.ValidateUsername,
          UserLoginValidators.ValidateSymbols
        ]
      ]
    });
  }

  private get userNameErrors(): string[] {
    const errors = [];
    const userNameField = this.loginForm.get('userName') as AbstractControl;
    if (userNameField.errors) {
      if (userNameField.errors?.required) { errors.push(FORM_ERRORS.LOGIN.USERNAME_REQUIRED); }
      if (!userNameField.errors?.validUserName) { errors.push(FORM_ERRORS.LOGIN.USERNAME_INVALID); }
      if (userNameField.errors?.userNameSymbol) { errors.push(FORM_ERRORS.LOGIN.USERNAME_SYMBOL); }
    }
    return errors;
  }

  get errors(): string[] {
    const errors = [
      ...this.userNameErrors,
    ];
    return errors;
  }
}
