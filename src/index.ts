import SavingAccount from "./entities/Accounts/SavingAccount"
import Transfer from "./entities/transactions/transfer"
import { Transaction } from "./entities/interfaces/Transaction"
import { CheckingAccount } from "./entities/Accounts/CheckingAccount"
import BankPayment from "./entities/transactions/BankPayment"
import PixPayment from "./entities/transactions/PixPayment"

const mcloAccount = new SavingAccount(0.5,{
  email: 'mclo@xpto.com',
  balance: 100,  
})
const adminAccount = new CheckingAccount(-1000,{
  email: 'admin@xpto.com',
  balance: 5000,
},
  )
// mcloAccount.debit(30)
// adminAccount.debit(30)
// mcloAccount.credit(30)
// adminAccount.credit(30)
// mcloAccount.updateEmail('mcl@bol.net')
// console.log('mcloAccount',mcloAccount);
// console.log('adminAccount',adminAccount);
// console.log(adminAccount.creationDate)

const payment = new BankPayment({
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

const payment2 = new BankPayment({
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
  transactions.forEach((transaction, index) =>{
    transaction.effect()    
    const transactionCode = transaction.transactionCodeGenerator(new Date())
    console.log(`Transaction number ${index}`,transactionCode);
    
  })
  }
  
commitTransactionRows([transfer,payment, payment2])
const transfer2 = new Transfer({
  destiny: mcloAccount,
  origin: adminAccount,
  value: 5000
})
transfer2.effect()

const payment3 = new PixPayment({
  destiny: adminAccount,
  origin: anonymousAccount,
  paymentDate:new Date('2023-06-19'),
  value:500
})
payment3.effect()
console.log(mcloAccount);
console.log(anonymousAccount);
console.log(adminAccount);
console.log('Finish Him, Flawless Victory');

