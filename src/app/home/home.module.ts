import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule} from '@angular/material';
import {MatTableModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ]
})
export class HomeModule { }
