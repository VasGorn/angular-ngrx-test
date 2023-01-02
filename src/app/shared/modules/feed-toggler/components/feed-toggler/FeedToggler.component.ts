import {Component, Input, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isLoggedInSelector} from "src/app/auth/store/selectors";

@Component({
  selector: "ant-feed-toggler",
  templateUrl: "./FeedToggler.component.html",
  styleUrls: ["./FeedToggler.component.scss"],
})
export class FeedTogglerComponent implements OnInit {
  @Input("tagName") tagNameProps: string | null = null;

  isLoggedIn$: Observable<boolean | null> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }

  private fetchData(): void {}

  private initializeListeners(): void {}

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

  private initializeForm(): void {}
}
