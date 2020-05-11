import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'mcu-trip-sheets',
  templateUrl: './trip-sheets.component.html',
  styleUrls: ['./trip-sheets.component.scss']
})
export class TripSheetsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewTripDialog(): void {
    const dialogRef = this.dialog.open(NewTripSheetDialog, {
      width: '600px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}

@Component({
  selector: 'new-trip-sheet',
  templateUrl: 'new-trip-sheet-form.html',
  styles: [
    `
    .dfx { display: flex; }
    .green { color:green; }
    .red { color:red; }
    .mtr { margin: 10px 10px 0 0; }
    .mat-dialog-content { max-height : 650px; }
    `
  ],
})
export class NewTripSheetDialog {

  // date = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString());
  dieslePanelOpenState = false;
  TAoptions : TravelAgencies[] = [
    {id:'1', name: 'VRL'},
    {id:'2', name: 'SRS'},
    {id:'3', name: 'Pooja'}
  ];

  contractorsOptions : Contractors[] = [
    {id:'1', name: 'XYZ'},
    {id:'2', name: 'ABC'},
    {id:'3', name: 'PQR'}
  ];
  TAfilteredOptions: Observable<TravelAgencies[]>;
  contractorsFilteredOptions: Observable<Contractors[]>;

  materialTypes = [
    {value: '10', viewValue: '10 MM'},
    {value: '20', viewValue: '20 MM'},
    {value: '40', viewValue: '40 MM'}
  ];
  materialnits = [
    {value: 'brass', viewValue: 'BRASS'},
    {value: 'ton', viewValue: 'TON'}
  ];
  paymentTypes = [
    {value: 'cash', viewValue: 'CASH'},
    {value: 'credit', viewValue: 'CREDIT'}
  ];

  constructor(
    public dialogRef: MatDialogRef<NewTripSheetDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}

    newTriptSheetForm = this.fb.group({
      tripSheetNo: ['', Validators.required],
      orderDate: [''],
      transportAgency: [''],
      vehicleNo: [''],
      contractor: [''],
      driverName: [''],
      orderLocation: [''],
      materialType: [''],
      materialUnit:[''],
      materialQuantity:[''],
      materialRate:[''],
      MaterialTotalamount:[''],
      payment:[''],
      perTripRate:[''],
      totalTripAmount:[''],
      diesel: this.fb.group({
        quantity: [''],
        ratePerLitre: [''],
        totalAmount: [''],
        openingReading: [''],
        closingReading:[],
      }),
    });

    ngOnInit(): void {
      this.TAfilteredOptions = this.newTriptSheetForm.controls['transportAgency'].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterTA(name) : this.TAoptions.slice())
      );

      this.contractorsFilteredOptions = this.newTriptSheetForm.controls['contractor'].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterContractors(name) : this.contractorsOptions.slice())
      );

      this.newTriptSheetForm.controls['orderDate'].setValue(new Date())      
    }

    displayTAFn(agency: TravelAgencies): string {
      return agency && agency.name ? agency.name : '';
    }   
  
    private _filterTA(name: string): TravelAgencies[] {
      const filterValue = name.toLowerCase();
  
      return this.TAoptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }

    displayContractorsFn(contractor: Contractors): string {
      return contractor && contractor.name ? contractor.name : '';
    }   
  
    private _filterContractors(name: string): Contractors[] {
      const filterValue = name.toLowerCase();
  
      return this.contractorsOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }

    onMaterialInputChanges() {
      let quantity = this.newTriptSheetForm.get('materialQuantity').value;
      let cost = this.newTriptSheetForm.get('materialRate').value;
      this.newTriptSheetForm.get('MaterialTotalamount').setValue(quantity*cost);
    }

    onTripAmountInputChanges() {
      let matAmount = this.newTriptSheetForm.get('MaterialTotalamount').value;
      let costPerTrip = this.newTriptSheetForm.get('perTripRate').value;
      this.newTriptSheetForm.get('totalTripAmount').setValue(matAmount+costPerTrip);
    }

    onDieselInputChanges() {
      let dieselQuantity = this.newTriptSheetForm.controls['diesel'].get('quantity').value;
      let costPerLtr = this.newTriptSheetForm.controls['diesel'].get('ratePerLitre').value;
      this.newTriptSheetForm.controls['diesel'].get('totalAmount').setValue(dieselQuantity*costPerLtr);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.newTriptSheetForm.value);    
  }
}

export interface TravelAgencies {
  id: string;
  name: string;
}
export interface Contractors {
  id: string;
  name: string;
}

