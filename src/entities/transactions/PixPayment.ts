import { Payment } from "./Payment";

export default class PixPayment extends Payment{

  effect():void{    
    this.origin.debit(this.value)
    this.destiny.credit(this.value)
    console.log('Send notification to BACEN');    
  }

}