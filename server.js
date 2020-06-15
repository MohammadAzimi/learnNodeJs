const http = require("http");
const fs = require("fs");

const githubUrl = "http://api.github.com/gists";
const fakeUrl = "http://jsonplaceholder.typicode.com/todos/1";


const req = http.get(fakeUrl, function (res) {
    let result;
    res.on('data', (data) => {
        result = data;
    })

    res.on('end', () => {
        fs.writeFile(`${process.cwd()}\\log.txt`, result, function (err) {
            err && console.log(err);
        });
    })
});

req.on('error', error => console.log(error))


const app = http.createServer(function (request, response) {
    if (request.method === 'GET') {
        if (request.url === '/') {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write('<p>welcome to George-js\n fake me!</p>');
            response.end();
        } else {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.write('<p>calling a get but not found 404!<p>');
            response.end();
        }
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write('<p>oops 404!</p>');
        response.end();
    }
})

app.listen(80);
console.log('server is up and ready');