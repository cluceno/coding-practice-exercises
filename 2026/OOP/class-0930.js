
class BankAccount {
  constructor(balance = 0) {      // the constructor — runs when you do `new BankAccount(...)`
    this.balance = balance;        // set up initial properties on `this`
  }

  deposit(amount) {                // a method — note: NO `function` keyword, no comma between methods
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    // your logic
    if (amount > this.balance) {
        return "Insufficient funds";
    } else {
        this.balance -= amount;
        return this.balance;
    }
  }

  getBalance() {
    return this.balance;
  }
}


const acc = new BankAccount(100);
console.log(acc.getBalance());     // 100
console.log(acc.deposit(50));      // 150
console.log(acc.withdraw(30));     // 120
console.log(acc.withdraw(500));    // "Insufficient funds"  (balance stays 120)
acc.getBalance();     // 120

const acc2 = new BankAccount();  // no initial balance
acc2.getBalance();    // 0
acc2.deposit(10);     // 10

/*

Key learning points: 

1. Pay attention to your operators. I had flipped the sign, which made the guard clause work incorrectly. 

2. Use constructor with class when making property/value pairs that will be unique to each instance. Methods will be added to the prototype by default. 

3. Note the differences between constructor functions, factory functions, and class. 
    Constructor: Can make use of prototypical inheritence when specified. Downside is that these functions can be used incorrectly 
    Factory functions: Makes use of closures and can enforce privacy. It does not need to use the keyword, new. Downside is it can be memory inefficient if you make 
        many instances that have identical properties. 
    Class: Methods are added to the prototype by default. Easy to read. Privacy features are new and can be enforced using #, which I still have to learn formally. 

Overall impression: This was a learning rep with many new nuances. I am still at the information gathering point with OOP and everytime I go through this, it feels like 
I learn a bunch of new things at once. Hopefully, this slows down and when it does, I will probably be in the consolidation phase, which also takes some more time on it's own. 

*/ 

