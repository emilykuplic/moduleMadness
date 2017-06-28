//connecting the files that contain the functions we need
var randomNumber = require('./randomNumber.js');
var convertToDollars = require('./convertToDollars.js');

//converting random number into a dollars
function total (randomNumber) {
  return convertToDollars(randomNumber);
}

//logging our random dollar amount with an Account balance string before
function accountBalance (total){
  console.log('Account balance: ' + total);
}

module.exports = {
  total: total,
  accountBalance: accountBalance,
};
