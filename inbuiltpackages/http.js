var http = require('http');
var fs = require('fs');
var server = http.createServer((request,response)=>{
   fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err;
    response.write(data);
    response.end();
   })
   
})

server.listen(5000);