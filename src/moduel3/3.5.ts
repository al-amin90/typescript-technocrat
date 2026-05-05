// access modifiers
class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  public addBalance(money: number) {
    return (this.userBalance = this.userBalance + money);
  }
  public getBalance() {
    return this.userBalance;
  }
}

const mezbaVaiAccount = new BankAccount(111, "Mr. gorib", 20);

class StudentAccount extends BankAccount {
  constructor(id: number, name: string, balance: number) {
    super(id, name, balance);
  }
  test() {
    // console.log(this.balance);
  }
}
const student = new StudentAccount(333, "al amin", 300);
// student.

{
  //----------------------------------------------------------------
  class BankAccount {
    constructor(
      readonly id: number,
      public name: string,
      protected balance: number,
    ) {}

    addDeposit(amount: number) {
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
