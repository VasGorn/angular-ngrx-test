import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "src/app/shared/types/currentUser.interface";
import {environment} from "src/environments/environment";
import {AuthResponseInterface} from "../types/authResponse.interface";
import {RegisterRequestIterface} from "../types/registerRequest.interface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestIterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + "/users";
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
