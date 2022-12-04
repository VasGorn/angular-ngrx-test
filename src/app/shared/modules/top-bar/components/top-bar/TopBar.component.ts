import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from "src/app/auth/store/selectors";
import {CurrentUserInterface} from "src/app/shared/types/currentUser.interface";

@Component({
  selector: "ant-top-bar",
  templateUrl: "./TopBar.component.html",
  styleUrls: ["./TopBar.component.scss"],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null> = new Observable();
  isAnonymous$: Observable<boolean> = new Observable();
  currentUser$: Observable<CurrentUserInterface | null> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
