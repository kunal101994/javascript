const accountId = 144553
let accountEmail = "satya@gmail.com"
var accountPassword = "12345"
accountCity = "odissa"
let accountState;

// accountId = 2 // not allowed

accountEmail = "rudra@gmail.com"
accountPassword = "1234567"
accountCity = "bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])