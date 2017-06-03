import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Http,Response  } from "@angular/http";
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do';
import { Funds} from "./funds";


@Injectable()
export class FundsServiceService {

getTotalFundsURL = "http://localhost:8080/v1/fundsservice/totalfunds";
  constructor(private _http: Http) { }

getTotalFunds() { 
         
         return this._http.get(this.getTotalFundsURL)
         .toPromise()
            .then(res => <Funds[]> res.json().data)
                    .then(data => { return data; });
}        
            
        /*return this._http.get(this.getTotalFundsURL)
            .map(response => {
                { return response.json() };
            })
            .catch(error => Observable.throw(error.json()));*/
//}

     /*getTotalFunds(): Observable<Funds[]> { 
      return this._http.get(this.getTotalFundsURL) 
      .map((response: Response) => <Funds[]> response.json())
      .catch(error => Observable.throw(error.json()))
      .do(data => console.log(JSON.stringify(data))); 
   }*/


}
