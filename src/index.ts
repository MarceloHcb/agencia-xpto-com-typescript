import { Payment } from "./entities/Payment"
import XptoAccount from "./entities/XptoAccount"

const mcloAccount = new XptoAccount('mclo@xpto.com', 100)
const adminAccount = new XptoAccount('admin.xpto', 500000000)
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

payment.effect()
console.log(mcloAccount);
console.log(adminAccount);




