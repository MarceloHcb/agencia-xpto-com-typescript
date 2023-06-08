import XptoAccount from "./XptoAccount"
import { AccountParams } from "../types/AccountParams";

export default class SavingAccount extends XptoAccount{
  constructor(private interest:number,accountParams: AccountParams){
    const {email, balance, creationDate} = accountParams
    super(email, balance, creationDate)
  }

  debit(value:number):void{
    if(value<= 0){
      throw new Error('Invalid value')
    }
    if(value > this._balance){
      throw new Error('Insufficient balance')
    }
    this._balance -= value
  }

  predictIncome(){
    return this.getBalance() * this.interest;
  }
}