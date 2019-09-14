import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    user: User;

    constructor(
      private router: Router,
      public afAuth: AngularFireAuth
    ) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
      });
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
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }

    public isLoggedIn() {
      const  user  =  JSON.parse(localStorage.getItem('user'));
      return  user  !==  null;
    }
}
