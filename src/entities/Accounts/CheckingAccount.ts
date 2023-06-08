import XptoAccount from "./XptoAccount";
import { AccountParams } from "../types/AccountParams";

export class CheckingAccount extends XptoAccount {

  constructor(private _limit: number,accountParams: AccountParams ){
    const {email, balance, creationDate} = accountParams
    super(email, balance, creationDate)
  }

  debit(value: number): void {
    const finalBalance = this._balance - value
    if(finalBalance < this._limit) {
      throw new Error("Limit value exceeded.");
    }
    this._balance -= value
  }
  
}
