import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";

import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {ArticleResponseInterface} from "src/app/shared/types/ArticleResponse.interface";
import {environment} from "src/environments/environment";
import {UpdateArticleRequestInterface} from "../types/UpdateArticleRequest.interface";

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    articleRequest: UpdateArticleRequestInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http
      .put<ArticleResponseInterface>(fullUrl, articleRequest)
      .pipe(
        map((response: ArticleResponseInterface) => {
          return response.article;
        })
      );
  }
}
