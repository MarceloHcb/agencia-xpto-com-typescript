import { Payment } from "./entities/transactions/Payment"
import XptoAccount from "./entities/XptoAccount"
import SavingAccount from "./entities/SavingAccount"
import Transfer from "./entities/transactions/transfer"
import { Transaction } from "./entities/interfaces/Transaction"

const mcloAccount = new SavingAccount(0.5,{
  email: 'mclo@xpto.com',
  balance: 100,  
})
const adminAccount = new XptoAccount('admin@xpto.com', 5000)
// mcloAccount.debit(30)
// adminAccount.debit(30)
// mcloAccount.credit(30)
// adminAccount.credit(30)
// mcloAccount.updateEmail('mcl@bol.net')
// console.log('mcloAccount',mcloAccount);
// console.log('adminAccount',adminAccount);
// console.log(adminAccount.creationDate)

const payment = new Payment({
  value: 50,
  origin: mcloAccount,
  destiny: adminAccount,
  dueDate: new Date('2022-12-12'),
  paymentDate: new Date('2023-01-01')  
})
// console.log(mcloAccount);
// console.log(adminAccount);
// console.log(mcloAccount.getBalance());
// console.log(adminAccount.getBalance());
const anonymousAccount = new SavingAccount(0.5,{
  email: 'anonymous@xpto.com',
  balance: 1000,
  creationDate: new Date('2008-13-02')  
})

const payment2 = new Payment({
  value: 500,
  origin: adminAccount,
  destiny: anonymousAccount,
  dueDate: new Date(),
  paymentDate: new Date()  
})
// console.log(anonymousAccount);
// console.log(adminAccount);
const transfer = new Transfer({
  destiny: mcloAccount,
  origin: anonymousAccount,
  value: 500
})

function commitTransactionRows(transactions:Transaction[]) {
  transactions.forEach((transaction) => transaction.effect())
}
commitTransactionRows([transfer,payment, payment2])

console.log('Finish Him, Flawless Victory');

console.log(mcloAccount);
console.log(anonymousAccount);
console.log(adminAccount);




