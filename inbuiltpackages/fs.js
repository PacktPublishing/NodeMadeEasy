fs = require('fs');

/*
fs.writeFile("sample.txt","Node is awesome.Async functions rock",(err)=>{
    if(err) throw err;
    console.log("Created a file");
});
console.log("END")


fs.appendFile("sample.txt","more data appended",(err)=>{
    if(err) throw err;
    console.log("Appending to a file");
});
console.log("END")

fs.rename("sample.txt","demo.txt",(err)=>{
    if(err) throw err;
    console.log("File Renamed");
});

fs.readFile("demo.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});

*/

fs.unlink("demo.txt",(err)=>{
    if(err) throw err;
    console.log("file deleted");
});



