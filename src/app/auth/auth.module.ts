import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {RegisterComponent} from "./components/register/register.component";
import {AuthService} from "./services/auth.service";
import {RegisterEffect} from "./store/effects/register.effect";
import {reducers} from "./store/reducers";
import {BackendErrorMessagesModule} from "../shared/modules/backend-error-messages/BackendErrorMessages.module";
import {PersistenceService} from "../shared/services/Persistence.service";
import {LoginEffect} from "./store/effects/login.effect";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature("auth", reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
