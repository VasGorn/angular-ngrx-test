import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {AuthModule} from "./auth/auth.module";
import {environment} from "../environments/environment";
import {TopBarModule} from "./shared/modules/top-bar/TopBar.module";
import {PersistenceService} from "./shared/services/Persistence.service";
import {AuthInterceptor} from "./shared/services/AuthInterceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
