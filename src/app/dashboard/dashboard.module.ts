import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { TripSheetsComponent, NewTripSheetDialog } from './trip-sheets/trip-sheets.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PaymentsComponent } from './payments/payments.component';
import { TransportersComponent } from './transporters/transporters.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { FuelComponent } from './fuel/fuel.component';
import { BillsComponent } from './bills/bills.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trips', component: TripSheetsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'transporters', component: TransportersComponent },
  { path: 'contractors', component: ContractorsComponent },
  { path: 'fuel', component: FuelComponent },
  { path: 'bills', component: BillsComponent }
];

@NgModule({
  declarations: [DashboardComponent, TripSheetsComponent, AccountsComponent, PaymentsComponent,
                TransportersComponent, ContractorsComponent, FuelComponent, BillsComponent,
                NewTripSheetDialog],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [NewTripSheetDialog],
  exports: []
})
export class DashboardModule { }
