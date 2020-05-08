import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mcu-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  dItems = [
    { id: 'd1', name: 'trips', title: 'Trips Details', image:'assets/images/tata-truck.jpg' },
    { id: 'd2', name: 'accounts', title: 'Accounts Details', image:'assets/images/accounts.jpg' },
    { id: 'd3', name: 'payments', title: 'Payments Details', image:'assets/images/paymentmethods.jpg' },
    { id: 'd4', name: 'transporters', title: 'Transporters Details', image:'assets/images/transporters.png' },
    { id: 'd5', name: 'contractors', title: 'Contractors Details', image:'assets/images/contractors.png' },
    { id: 'd6', name: 'fuel', title: 'Fuel Details', image:'assets/images/fuel.jpg' },
    { id: 'd7', name: 'bills', title: 'Bill Details', image:'assets/images/bills.jpg' },
    { id: 'd8', name: 'test', title: 'test', image:'assets/images/dummy.png' },
    { id: 'd9', name: 'test', title: 'test', image:'assets/images/dummy.png' }
  ]

  cardClick(item) {
    console.log(item);
    
    item.name!='test'?this.router.navigate([item.name]):alert('Still in process..');
  }

}
