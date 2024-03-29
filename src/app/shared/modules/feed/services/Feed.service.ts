import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";

import {GetFeedResponseInterface} from "../types/GetFeedResponse.interface";

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}
  getFeed(subUrl: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + subUrl;
    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}
