class XptoAccount {
  constructor(private _email:string, private balance:number, private _creationDate = new Date()){

  }

  debit(value:number):void{
    if(value<= 0){
      throw new Error('Invalid value')
    }
    if(value > this.balance){
      throw new Error('Insufficient balance')
    }
    this.balance -= value
  }

  credit(value:number):void{
    this.balance += value
  }

  get creationDate():string {
    return `${this._email} creted on ${this._creationDate} with ${this.balance}`
  }

  updateEmail(email:string):void{
    this._email = email
  }
}

export default XptoAccount