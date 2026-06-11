import http from 'node:http'

const server = http.createServer((request, response)=>{
    console.log(request.url)    

    switch(request.url){
        case'/':
        response.write('Hello From Node');
        response.end()

        case'/about':
        response.write("This is an about Page");
         response.end()
    }
   

    //console.log(request.method)
    response.writeHead(200);
})

server.listen(5000,()=>{
    console.log('Server is running on http://localhost:5000/')
})