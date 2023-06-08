import XptoAccount from "../Accounts/XptoAccount";
import { Transaction } from "../interfaces/Transaction";

type TransferParams ={
  value:number,
  origin: XptoAccount,
  destiny:XptoAccount,
}

export default class Transfer extends Transaction {
  constructor(private _params: TransferParams){
    super()
  }
  effect():void{
    this._params.origin.debit(this._params.value)
    this._params.destiny.credit(this._params.value)
  }

}