import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";

import {registerAction} from "../../store/actions/register.action";
import {
  isSubmittingSelector,
  validationErrorSelector,
} from "../../store/selectors";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";

@Component({
  selector: "ant-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isSubmitting$: Observable<boolean> = new Observable();
  backendErrors$: Observable<BackendErrorsInterface | null> = new Observable();

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ["", Validators.required],
      email: "",
      password: "",
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({request}));
  }
}
