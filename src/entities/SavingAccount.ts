import XptoAccount from "./XptoAccount"
import { AccountParams } from "./types/AccountParams";

export default class SavingAccount extends XptoAccount{
  constructor(private fees:number,accountParams: AccountParams){
    const {email, balance, creationDate} = accountParams
    super(email, balance, creationDate)
  }

  predictIncome(){
    return this.getBalance() * this.fees;
  }
}