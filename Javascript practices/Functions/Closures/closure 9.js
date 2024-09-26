function createBankAccount(initialAmount){
    let total = initialAmount

    return {
        deposit: function(value){
            total+=value
        },
        withdraw: function (value){
            total-=value
        },
        getBalance: function (){
            return total
        }
    }
}





const bankAccount = createBankAccount(100);
bankAccount.deposit(50);
console.log(bankAccount.getBalance());  // Output: 150
bankAccount.withdraw(30);
console.log(bankAccount.getBalance());  // Output: 120
