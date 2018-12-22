import { User } from "../_models/User.model";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false); // {1}
    isAuth = false;

    constructor( private router: Router) {}

    get isLoggedIn() {
      return this.loggedIn.asObservable(); // {2}
    }


    signIn() {
        //We simule the time needed to connect through a webservice with an async method
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                    }, 1000
                );
            } 
        )
    }


    signOut() {
        this.isAuth = false;
    }

    login(user: User){
        if (user.alias !== '' && user.password !== '' ) { // {3}
          this.loggedIn.next(true);
          this.router.navigate(['/']);
        }
      }
}