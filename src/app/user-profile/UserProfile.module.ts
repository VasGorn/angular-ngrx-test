import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";

import {UserProfileComponent} from "./components/user-profile/UserProfile.component";
import {UserProfileService} from "./services/user-profile.service";
import {GetUserProfileEffect} from "./store/effects/GetUserProfile.effect";
import {reducers} from "./store/reducers";

const routes: Routes = [
  {
    path: "profiles/:slug",
    component: UserProfileComponent,
  },
  {
    path: "profiles/:slug",
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature("UserProfile", reducers),
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}
