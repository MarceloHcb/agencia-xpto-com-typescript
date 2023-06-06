import XptoAccount from "../XptoAccount";
import { Transaction } from "../interfaces/Transaction";

type TransferParams ={
  value:number,
  origin: XptoAccount,
  destiny:XptoAccount,
}

export default class Transfer implements Transaction {
  constructor(private _params: TransferParams){

  }
  effect():void{
    this._params.origin.debit(this._params.value)
    this._params.destiny.credit(this._params.value)
  }
}