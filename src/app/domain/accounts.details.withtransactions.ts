export class AccountDetailsWithTransactions {
    constructor(public accountId: number, public balance: number, public txList: TransactionDetails[]) { }
  }

export class TransactionDetails {
    constructor (public transactionId: Number, public value: Number, public type: String, public balance: Number, public txDate: Date) { }
  }
