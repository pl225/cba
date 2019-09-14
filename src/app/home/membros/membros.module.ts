import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembrosComponent } from './list/membros.component';
import { CadastroMembroComponent } from './cadastro/cadastro.component';
import { MatCardModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MembrosRoutingRoutingModule } from './membros-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MembrosComponent, CadastroMembroComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MembrosRoutingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class MembrosModule { }
