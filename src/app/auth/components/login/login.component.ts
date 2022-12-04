import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";
import {loginAction} from "../../store/actions/login.action";

import {
  isSubmittingSelector,
  validationErrorSelector,
} from "../../store/selectors";
import {LoginRequestInterface} from "../../types/loginRequest.interface";

@Component({
  selector: "ant-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
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
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({request}));
  }
}
