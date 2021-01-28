import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationsComponent } from './prestations.component';


@NgModule({
  declarations: [PrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
