import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs";
import {Observable} from "rxjs/internal/Observable";
import {ProfileInterface} from "src/app/shared/types/Profile.interface";
import {environment} from "src/environments/environment";
import {GetUserProfileResponseInterface} from "../types/GetUserProfileResponse.interface";

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http.get<GetUserProfileResponseInterface>(url).pipe(
      map((response) => {
        return response.profile;
      })
    );
  }
}
