import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {AuthModule} from "./auth/auth.module";
import {environment} from "../environments/environment";
import {TopBarModule} from "./shared/modules/top-bar/TopBar.module";
import {PersistenceService} from "./shared/services/Persistence.service";
import {AuthInterceptor} from "./shared/services/AuthInterceptor.service";
import {GlobalFeedModule} from "./global-feed/GlobalFeed.module";
import {YourFeedModule} from "./your-feed/YourFeed.module";
import {TagFeedModule} from "./tag-feed/TagFeed.module";
import {ArticleModule} from "./article/Article.module";
import {CreateArticleModule} from "./create-article/CreateArticle.module";
import {EditArticleModule} from "./edit-article/EditArticle.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule, // important - 'ArticleModule' after 'CreateArticleModule', because of URL
    EditArticleModule,
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
