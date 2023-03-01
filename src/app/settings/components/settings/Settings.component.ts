import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {filter, Observable, Subscription} from "rxjs";
import {logoutAction} from "src/app/auth/store/actions/sync.action";
import {updateCurrentUserAction} from "src/app/auth/store/actions/updateCurrentUser.action copy";
import {currentUserSelector} from "src/app/auth/store/selectors";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";
import {CurrentUserInterface} from "src/app/shared/types/currentUser.interface";
import {CurrentUserRequestInterface} from "src/app/shared/types/CurrentUserRequest.interface";
import {
  isSubmittingSelector,
  validationErrorSelector,
} from "../../store/selectors";

@Component({
  selector: "ant-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentUser: CurrentUserInterface = {
    bio: "user not initialized",
    createAt: "",
    email: "",
    id: -1,
    image: "",
    token: "",
    updateAt: "",
    username: "user not initialized",
  };
  currentUserSubscription: Subscription = new Subscription();
  form: FormGroup = new FormGroup({});
  isSubmitting$: Observable<boolean> = new Observable();
  backendErrors$: Observable<BackendErrorsInterface | null> = new Observable();

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  submit(): void {
    const currentUserRequest: CurrentUserRequestInterface = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(
      updateCurrentUserAction({request: {user: currentUserRequest}})
    );
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
  }

  initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
      });
  }

  initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: "",
    });
  }
}
