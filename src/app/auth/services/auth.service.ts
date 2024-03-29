import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";

import {CurrentUserInterface} from "src/app/shared/types/currentUser.interface";
import {CurrentUserRequestInterface} from "src/app/shared/types/CurrentUserRequest.interface";
import {environment} from "src/environments/environment";
import {AuthResponseInterface} from "../types/authResponse.interface";
import {LoginRequestInterface} from "../types/loginRequest.interface";
import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {UserUpdateRequestInterface} from "../types/UserUpdateRequest.interface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + "/users";
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + "/users/login";
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + "/user";
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser));
  }

  updateCurrentUser(
    updateUserRequest: UserUpdateRequestInterface
  ): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + "/user";
    return this.http
      .put<AuthResponseInterface>(url, updateUserRequest)
      .pipe(map(this.getUser));
  }
}
