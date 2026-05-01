"use strict";
{
    // access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        addDiposit(money) {
            return this.balance = this.balance + money;
        }
        getDiposit() {
            return this.balance;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // console.log(goribManusherAccount.addDiposit(400));
    class StudentAccount extends BankAccount {
        constructor(id, name, balance) {
            super(id, name, balance);
        }
        test() {
            // console.log(this.balance);
        }
    }
    const student = new StudentAccount(333, "al amin", 300);
    // student.
}
{ //----------------------------------------------------------------
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        addDeposit(amount) {
            this.balance = this.balance + amount;
        }
        getBalance() {
            return this.balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this.balance;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    goribManusherAccount.addDeposit(10);
    console.log(goribManusherAccount.getBalance());
}
