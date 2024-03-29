import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {tap} from "rxjs";
import {PersistenceService} from "src/app/shared/services/Persistence.service";
import {logoutAction} from "../actions/sync.action";

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistentService.set("accessToken", "");
          this.router.navigateByUrl("/");
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private persistentService: PersistenceService,
    private router: Router
  ) {}
}
