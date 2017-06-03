import { Component, OnInit } from '@angular/core';
import { Funds} from "./funds";
import { FundsServiceService } from "./funds-service.service";

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

funds : Funds[];
displayDialog: boolean;
fund: Funds = new Funds();
selectedFund: Funds;
newFund: boolean;
//subscription ;

  constructor(private fundsService : FundsServiceService) {}
    
  ngOnInit() {
    this.fundsService.getTotalFunds().then(funds => this.funds = funds);
   // this.subscription = this.fundsService.getTotalFunds().subscribe(funds => this.funds = funds); 
  }

  /*ngOnDestroy() {
  this.subscription.unsubscribe();
}*/

showDialogToAdd() {
        this.newFund = true;
        this.fund = new Funds();
        this.displayDialog = true;
    }

    save() {
        if(this.newFund)
            this.funds.push(this.fund);
        else
            this.funds[this.findSelectedFundIndex()] = this.fund;

        this.fund = null;
        this.displayDialog = false;
    }

    delete() {
        this.funds.splice(this.findSelectedFundIndex(), 1);
        this.fund = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newFund = false;
        this.fund = this.cloneFund(event.data);
        this.displayDialog = true;
    }

    cloneFund(f: Funds): Funds {
        let fund = new Funds();
        for(let prop in f) {
            fund[prop] = f[prop];
        }
        return fund;
    }

    findSelectedFundIndex(): number {
        return this.funds.indexOf(this.selectedFund);
    }
}
