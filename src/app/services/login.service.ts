import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    user: Observable<firebase.User>;

    constructor(
      private router: Router,
      public afAuth: AngularFireAuth
    ) {
        this.user = afAuth.authState;
    }

    public async login(mail: string, password: string) {

      try {
        const usuarioAutenticado: any = await this.afAuth.auth.signInWithEmailAndPassword(mail, password);
        // localStorage.setItem('token', usuarioAutenticado.Yd);
        this.router.navigate(['']);
      } catch (e) {
        console.log(e);
        this.router.navigate(['/login']);
      }
    }

    public async logout() {
      return this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['']);
      });
    }

    public async isLoggedIn() {
      const u: any = await this.afAuth.user;
      return u != null;
    }
}
