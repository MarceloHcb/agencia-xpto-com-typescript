import XptoAccount from "./entities/XptoAccount"

const mcloAccount = new XptoAccount('mclo@xpto.com', 100)
const adminAccount = new XptoAccount('admin.xpto', 500000000)
// mcloAccount.debit(30)
// adminAccount.debit(30)
mcloAccount.credit(30)
adminAccount.credit(30)
// mcloAccount.updateEmail('mcl@bol.net')
console.log('mcloAccount',mcloAccount);
console.log('adminAccount',adminAccount);
// console.log(adminAccount.creationDate)



