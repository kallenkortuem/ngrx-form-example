import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormGroup,
  ValidatorFn
} from "@angular/forms";

export class FormGroupOf<T> extends FormGroup {
  constructor(
    controls: { [K in keyof T]?: AbstractControl },
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }
}
