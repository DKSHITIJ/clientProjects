export class Funds {
    monthlyFundAmount: number;
    interstRate: number;
    fundName: string;
    goal: string;
    noOfYears: number;
    fundAmount: number;
    totalFundDetails: number;

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
