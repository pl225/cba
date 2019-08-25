import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembrosComponent } from './list/membros.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatCardModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [MembrosComponent, CadastroComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ]
})
export class MembrosModule { }
