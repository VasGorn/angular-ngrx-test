import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {environment} from "src/environments/environment";
import queryString from "query-string";

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
export class FeedComponent implements OnInit, OnDestroy {
  @Input("apiUrl") apiUrlProps: string = "";

  isLoading$: Observable<boolean> = new Observable();
  error$: Observable<string | null> = new Observable();
  feed$: Observable<GetFeedResponseInterface | null> = new Observable();

  queryParamsSubscription: Subscription = new Subscription();

  limit: number = environment.limit;
  baseUrl: string = "";
  currentPage: number = 1;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  private fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}));
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split("?")[0];
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params["page"] || "1");
        this.fetchFeed();
      }
    );
  }

  private initializeForm(): void {}
}
