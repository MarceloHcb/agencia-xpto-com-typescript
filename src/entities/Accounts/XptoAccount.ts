import Validator from "./validations/Schema";
abstract class XptoAccount {
constructor(private _email:string, protected _balance:number, 
  private _creationDate = new Date() ){
  Validator.validateEmail(_email)
  }
  abstract debit(value:number) :void
  // debit(value:number):void{
  //   if(value<= 0){
  //     throw new Error('Invalid value')
  //   }
  //   if(value > this._balance){
  //     throw new Error('Insufficient balance')
  //   }
  //   this._balance -= value
  // }

  credit(value:number):void{
    this._balance += value
  }

  get creationDate():string {
    return `${this._email} creted on ${this._creationDate} with ${this._balance}`
  }

  getBalance():number{
    return this._balance
  }

  updateEmail(email:string):void{
    this._email = email
  }
}

export default XptoAccount