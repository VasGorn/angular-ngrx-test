import {Component, Input, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {getFeedAction} from "../../store/actions/GetFeed.action";
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from "../../store/Selectors";
import {GetFeedResponseInterface} from "../../types/GetFeedResponse.interface";

@Component({
  selector: "ant-feed",
  templateUrl: "./Feed.component.html",
  styleUrls: ["./Feed.component.scss"],
})
export class FeedComponent implements OnInit {
  @Input("apiUrl") apiUrlProps: string = "";

  isLoading$: Observable<boolean> = new Observable();
  error$: Observable<string | null> = new Observable();
  feed$: Observable<GetFeedResponseInterface | null> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchData();
    this.initializeValues();
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}));
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }

  initializeForm(): void {}
}
