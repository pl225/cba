import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembrosComponent } from './list/membros.component';
import { CadastroMembroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: MembrosComponent
  },
  {
    path: 'create',
    component: CadastroMembroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembrosRoutingRoutingModule { }
