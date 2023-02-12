import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {AddArticleRequestInterface} from "src/app/shared/types/AddArticleRequest.interface";
import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {ArticleRequestInterface} from "src/app/shared/types/ArticleRequest.interface";
import {ArticleResponseInterface} from "src/app/shared/types/ArticleResponse.interface";
import {environment} from "src/environments/environment";

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleRequest: AddArticleRequestInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + "/articles";
    return this.http
      .post<ArticleResponseInterface>(fullUrl, articleRequest)
      .pipe(
        map((response: ArticleResponseInterface) => {
          return response.article;
        })
      );
  }
}
