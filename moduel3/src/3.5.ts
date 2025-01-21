{
    // access modifiers
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        public addDiposit(money: number){
            return this.balance = this.balance + money
        }
        public getDiposit(){
            return this.balance
        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20)
    // console.log(goribManusherAccount.addDiposit(400));

    class StudentAccount extends BankAccount{
        constructor(id: number, name: string, balance: number){
            super(id, name, balance)
        }
        test(){
            // console.log(this.balance);
        }
    }
    const student = new StudentAccount(333, "al amin", 300)
    // student.
}

{ //----------------------------------------------------------------
    class BankAccount {

        constructor ( readonly id: number, public name: string, protected balance: number){}

        addDeposit(amount: number){
            this.balance = this.balance + amount
        }
        getBalance(){
            return this.balance
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this.balance
        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20)

    goribManusherAccount.addDeposit(10)
    console.log(goribManusherAccount.getBalance());
}