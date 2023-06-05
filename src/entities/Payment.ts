import XptoAccount from "./XptoAccount";

type PaymentParams = {
  value:number,
  origin: XptoAccount,
  destiny:XptoAccount,
  dueDate: Date,
  paymentDate: Date 
}

export class Payment { 
  constructor(private _params: PaymentParams ){
  }
  effect(){
    const finalValue = this.calculateFinalValue()
    this._params.origin.debit(finalValue)
    this._params.destiny.credit(finalValue)
  }

  private calculateFinalValue(): number {
    const overdue: boolean = (this._params.dueDate.getTime() < this._params.paymentDate.getTime())
    if(overdue){
      return this._params.value * 1.2;
    }
    return this._params.value
  }
}