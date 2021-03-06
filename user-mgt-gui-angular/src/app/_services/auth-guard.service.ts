import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs-compat";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

//In order to inject a service inside another service
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if(this.authService.isAuth) {
            return true;
        }
        else {
            this.router.navigate(['/auth']);
        }
    }
}