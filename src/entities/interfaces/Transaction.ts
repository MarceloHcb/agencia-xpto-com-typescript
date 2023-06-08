import crypto from 'node:crypto'
export abstract class Transaction {
  abstract effect():void
  transactionCodeGenerator(effectiveDate: Date): string {
    const timestamp = effectiveDate.getTime()
    const uuid = crypto.randomUUID();
    return `${timestamp}-${uuid}`
  }
}