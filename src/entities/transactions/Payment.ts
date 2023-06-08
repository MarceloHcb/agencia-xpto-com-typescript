import XptoAccount from "../Accounts/XptoAccount";
import { Transaction } from "../interfaces/Transaction";
import crypto from 'node:crypto'

export type PaymentParams = {
  value:number,
  origin: XptoAccount,
  destiny:XptoAccount,
  // dueDate: Date,
  paymentDate: Date 
}

export abstract class Payment extends Transaction { 
  constructor(private _params: PaymentParams ){
    super()
  }

  abstract effect(): void;
  // effect(){
  //   const finalValue = this.calculateFinalValue()
  //   this._params.origin.debit(finalValue)
  //   this._params.destiny.credit(finalValue)
  // }

  get paymentDate(): Date{
    return this._params.paymentDate
  }
  get origin():XptoAccount {
    return this._params.origin
  }
  get destiny(): XptoAccount{
    return this._params.destiny
  }
  get value(): number {
    return this._params.value
  }
  
}