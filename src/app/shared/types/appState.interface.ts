import {ArticleStateInterface} from "src/app/article/types/ArticleState.interface";
import {AuthStateInterface} from "src/app/auth/types/authState.interface";
import {FeedStateInterface} from "../modules/feed/types/FeedState.interface";
import {PopularTagsStateInterface} from "../modules/popular-tags/types/PopularTagsState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
}
