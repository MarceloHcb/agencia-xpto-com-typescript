import { Payment } from "./Payment";

export default class CardPayment extends Payment{

  effect():void{
    console.log('Checks likelihood of fraud');   
    this.origin.debit(this.value)
    this.destiny.credit(this.value)    
  }

}