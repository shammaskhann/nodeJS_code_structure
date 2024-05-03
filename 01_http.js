// Create a Server Using http module 
const http = require('http');

var course = [
    {
        name: "Node JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "React JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Angular JS",
        duration: "2 days",
        price: "2000"
    }
]
// http.createServer().listen(9000); // server created but no reponse is sent to client
http.createServer((request,response) => {
    console.log('Got a response',request);
    if(request.url === '/'){
        response.write('Hello World');
        response.end();
    }
    else if(request.url === '/api/courses'){
        response.write(JSON.stringify(course));
        response.end();
    }
}).listen(8080);