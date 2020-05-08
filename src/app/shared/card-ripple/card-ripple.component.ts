import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mcu-card-ripple',
  templateUrl: './card-ripple.component.html',
  styleUrls: ['./card-ripple.component.scss']
})
export class CardRippleComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  @Input() details:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
