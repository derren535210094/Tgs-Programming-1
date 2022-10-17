/* console.log('Hello World');
*/



/* const http = require('http');

http.createServer(function (request, response) {
    response.end('Hello World Server');
}).listen(8080);

console.log('Server is running at port 8080'); */




// const fs = require('fs');

/*
//sync version
const data = fs.readFileSync('input.txt');
console.log(`Sync data: ${data}`); */

/*
//async version
fs.readFile('input.txt', function(err, data) {
    if (err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

console.log('Test async function'); */





const express= require('express');

const app = express();

app.get('/', function (req, res){
    res.send('Hello World!!! this is an express server ......');
});


app.listen(8080);


