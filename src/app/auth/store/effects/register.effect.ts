import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({request}) => {
            return this.authService.register(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    return registerSuccessAction({currentUser})
                }),
                catchError(() => {
                    return of(registerFailureAction())
                })
            )
        })
    ))

    constructor(private actions$: Actions, 
        private authService: AuthService) {}
}