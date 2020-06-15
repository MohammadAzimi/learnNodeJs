const http = require("http");
const fs = require("fs");

const githubUrl = "http://api.github.com/gists";
const fakeUrl = "http://jsonplaceholder.typicode.com/todos/1";


const req = http.get(fakeUrl, function(res){
    let result;
    res.on('data', (data) =>{
        result = data;
    })

    res.on('end', () => {
        fs.writeFile(`${process.cwd()}\\log.txt`, result, function(err){
            err && console.log(err);
        });
    })
});

req.on('error', error => console.log(error))