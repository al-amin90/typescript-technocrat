"use strict";
{
    // Getter and setter
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        //setter
        set addDiposit(amount) {
            this._balance = this._balance + amount;
        }
        //getter
        get balance() {
            return this._balance;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount.addDiposit(400); //function call korci
    goribManusherAccount.addDiposit = 300; // property ar moto kore
    // console.log(goribManusherAccount.balance); // property ar moto kore
}
{ //----------------------------------------------------------------
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        set addDeposit(amount) {
            this.balance = this.balance + amount;
        }
        get getBalance() {
            return this.balance;
        }
    }
    // class StudentAccount extends BankAccount {
    //     test() {
    //         this.balance
    //     }
    // }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 5);
    goribManusherAccount.addDeposit = 50;
    goribManusherAccount.addDeposit = 5;
    console.log(goribManusherAccount.getBalance);
}
