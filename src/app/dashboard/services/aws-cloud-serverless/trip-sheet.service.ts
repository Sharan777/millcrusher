import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripSheetService {

  constructor(private http: HttpClient) { }

  getAllTripSheets() {
    this.http.get('https://7f5fars35b.execute-api.us-east-2.amazonaws.com/Dev/mill-crusher-api')
    .subscribe((result)=> {
      console.log('from service' + result);
    });
  }

  newTripSheet(formData) {
    this.http.post('https://7f5fars35b.execute-api.us-east-2.amazonaws.com/Dev/mill-crusher-api',formData)
    .subscribe((result)=> {
      console.log('from service' + JSON.stringify(result))
    });
  }
}
