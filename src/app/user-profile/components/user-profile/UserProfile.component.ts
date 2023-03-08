import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {combineLatest, filter, map, Observable, Subscription} from "rxjs";
import {currentUserSelector} from "src/app/auth/store/selectors";
import {CurrentUserInterface} from "src/app/shared/types/currentUser.interface";
import {ProfileInterface} from "src/app/shared/types/Profile.interface";
import {getUserProfileAction} from "../../store/actions/getUserProfile.action";
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from "../../store/selectors";

@Component({
  selector: "ant-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface = {
    bio: "not initialized",
    following: false,
    image: "",
    username: "not initialized",
  };

  isLoading$: Observable<boolean> = new Observable();
  error$: Observable<string | null> = new Observable();
  userProfileSubscription: Subscription = new Subscription();
  slug: string | null = null;
  apiUrl: string | null = null;
  isCurrentUserProfile$: Observable<boolean> = new Observable();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get("slug");
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          ProfileInterface
        ]) => {
          return currentUser.username === userProfile.username;
        }
      )
    );
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: ProfileInterface | null) => {
        if (userProfile) this.userProfile = userProfile;
      });

    this.route.params.subscribe((params: Params) => {
      this.slug = this.route.snapshot.paramMap.get("slug");
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    if (this.slug) this.store.dispatch(getUserProfileAction({slug: this.slug}));
  }

  getApiUrl(): string {
    const isFavorites: boolean = this.router.url.includes("favorites");
    return (this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`);
  }
}
