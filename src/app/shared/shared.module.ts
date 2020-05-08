import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRippleComponent } from './card-ripple/card-ripple.component';
import { MaterialModule } from '../material/material.module'



@NgModule({
  declarations: [CardRippleComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[CardRippleComponent]
})
export class SharedModule { }
