import { Payment, PaymentParams } from "./Payment";

type PaymentBankParams = PaymentParams & {
  dueDate: Date
}

export default class BankPayment extends Payment {
  static porcentagemFine = 0.2
  constructor(private params: PaymentBankParams){
    super(params)
  }

effect(){
    const finalValue = this.calculateFinalValue()
    this.params.origin.debit(finalValue)
    this.params.destiny.credit(finalValue)
  }

  override transactionCodeGenerator(effectiveDate: Date): string {
    const defaultCode = super.transactionCodeGenerator(effectiveDate)    
    const timestampExpiration =  this.params.dueDate.getTime()
    return `${defaultCode}-${timestampExpiration}`
  }

  private calculateFinalValue(): number {
    const paymentDate = this.params.paymentDate
    const overdue: boolean = (this.params.dueDate.getTime() < paymentDate.getTime())
    if(overdue){
      return this.params.value * 1.2;
    }
    return this.params.value
  }
}