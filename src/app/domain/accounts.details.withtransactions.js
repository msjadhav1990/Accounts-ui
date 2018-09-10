"use strict";
var AccountDetailsWithTransactions = (function () {
    function AccountDetailsWithTransactions(accountId, balance, txList) {
        this.accountId = accountId;
        this.balance = balance;
        this.txList = txList;
    }
    return AccountDetailsWithTransactions;
}());
exports.AccountDetailsWithTransactions = AccountDetailsWithTransactions;
var TransactionDetails = (function () {
    function TransactionDetails(transactionId, value, type, balance, txDate) {
        this.transactionId = transactionId;
        this.value = value;
        this.type = type;
        this.balance = balance;
        this.txDate = txDate;
    }
    return TransactionDetails;
}());
exports.TransactionDetails = TransactionDetails;
//# sourceMappingURL=accounts.details.withtransactions.js.map