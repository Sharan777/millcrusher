import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRippleComponent } from './card-ripple/card-ripple.component';



@NgModule({
  declarations: [CardRippleComponent],
  imports: [
    CommonModule
  ],
  exports:[CardRippleComponent]
})
export class SharedModule { }
