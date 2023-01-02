import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {PopularTagType} from "src/app/shared/types/PopularTag.type";
import {getPopularTagsAction} from "../../store/actions/GetPopularTags.action";
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from "../../store/Selectors";

@Component({
  selector: "ant-popular-tags",
  templateUrl: "./PopularTags.component.html",
  styleUrls: ["./PopularTags.component.scss"],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null> = new Observable();
  isLoading$: Observable<boolean> = new Observable();
  error$: Observable<string | null> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }

  private fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }

  private initializeListeners(): void {}

  private initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  private initializeForm(): void {}
}
