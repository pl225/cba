import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembrosComponent } from './list/membros.component';
import { CadastroMembroComponent } from './cadastro/cadastro.component';
import { MatCardModule, MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MembrosRoutingRoutingModule } from './membros-routing.module';

@NgModule({
  declarations: [MembrosComponent, CadastroMembroComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MembrosRoutingRoutingModule
  ]
})
export class MembrosModule { }
