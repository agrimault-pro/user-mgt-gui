export class AuthService {
    isAuth = false;

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
}