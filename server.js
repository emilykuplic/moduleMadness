var http = require('http');
var randomNumber = require('./modules/randomNumber.js');
var convertToDollars = require('./modules/convertToDollars.js');
var moduleThree = require('./modules/moduleThree.js');


var server = http.createServer(function(request, response){
var salary = randomNumber(100,1000000);
// console.log(randomNumber(100,1000000));
// console.log(convertToDollars(4569384753));
console.log(moduleThree.accountBalance(moduleThree.total(salary)));


// response.writeHead(200);
// response.write('Hello');
// response.end();
});

server.listen(8000);
console.log('listening on port 8000');
