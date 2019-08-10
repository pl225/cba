import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
